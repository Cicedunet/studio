"use client";

import { useState, useEffect, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Trash2 } from 'lucide-react';
import { getProducts, addProduct, deleteProduct } from './actions';

interface Product {
  id: number;
  name: string;
  image: string;
  hint: string;
  price: number;
  category: string;
}

export default function AdminPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        image: '',
        hint: '',
        price: 0,
        category: 'catalogue'
    });

    const fetchProducts = async () => {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleAddProduct = async (e: FormEvent) => {
        e.preventDefault();
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        await addProduct(newProduct);
        fetchProducts(); // Refresh the list
        setNewProduct({ name: '', image: '', hint: '', price: 0, category: 'catalogue' }); // Reset form
    };

    const handleDeleteProduct = async (productId: number) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
            await deleteProduct(productId);
            fetchProducts(); // Refresh the list
        }
    };

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold mb-8">Portail Administrateur</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Ajouter un produit</h2>
                    <form onSubmit={handleAddProduct} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Nom du produit</Label>
                            <Input id="name" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
                        </div>
                        <div>
                            <Label htmlFor="price">Prix</Label>
                            <Input id="price" type="number" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})} />
                        </div>
                        <div>
                            <Label htmlFor="image">URL de l'image</Label>
                            <Input id="image" value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} />
                        </div>
                        <div>
                            <Label htmlFor="hint">Indice (pour l'IA)</Label>
                            <Input id="hint" value={newProduct.hint} onChange={e => setNewProduct({...newProduct, hint: e.target.value})} />
                        </div>
                        <div>
                            <Label htmlFor="category">Catégorie</Label>
                            <Select value={newProduct.category} onValueChange={value => setNewProduct({...newProduct, category: value})}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Sélectionner une catégorie" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="catalogue">Catalogue</SelectItem>
                                    <SelectItem value="parfums">Parfums</SelectItem>
                                    <SelectItem value="minceur">Minceur</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit">Ajouter le produit</Button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Produits existants</h2>
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
                        {products.map(product => (
                            <Card key={product.id}>
                                <CardContent className="flex items-center justify-between p-4">
                                    <div>
                                        <p className="font-bold">{product.name}</p>
                                        <p className="text-sm text-muted-foreground">{product.category}</p>
                                    </div>
                                    <Button variant="destructive" size="icon" onClick={() => handleDeleteProduct(product.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
