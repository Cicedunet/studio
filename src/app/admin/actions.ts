"use server";

import fs from 'fs/promises';
import path from 'path';

interface Product {
  id: number;
  name: string;
  image: string;
  hint: string;
  price: number;
  category: string;
}

const productsFilePath = path.join(process.cwd(), 'public', 'produits.json');

export async function getProducts(): Promise<Product[]> {
  try {
    const data = await fs.readFile(productsFilePath, 'utf-8');
    const json = JSON.parse(data);
    return json.products || [];
  } catch (error) {
    console.error('Error reading products file:', error);
    return [];
  }
}

export async function addProduct(newProduct: Omit<Product, 'id'>): Promise<Product[]> {
  const products = await getProducts();
  const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const productWithId = { ...newProduct, id: newId };
  const updatedProducts = [...products, productWithId];

  try {
    await fs.writeFile(productsFilePath, JSON.stringify({ products: updatedProducts }, null, 2));
    return updatedProducts;
  } catch (error) {
    console.error('Error writing products file:', error);
    return products; // Return original products if write fails
  }
}

export async function deleteProduct(productId: number): Promise<Product[]> {
    let products = await getProducts();
    const updatedProducts = products.filter(p => p.id !== productId);

    try {
        await fs.writeFile(productsFilePath, JSON.stringify({ products: updatedProducts }, null, 2));
        return updatedProducts;
    } catch (error) {
        console.error('Error writing products file:', error);
        return products;
    }
}
