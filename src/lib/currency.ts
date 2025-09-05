import { Currency } from '@/context/CurrencyContext';

export const exchangeRates: { [key: string]: number } = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.85,
  XOF: 655.957,
};

export const convertPrice = (price: number, currency: Currency) => {
  const rate = exchangeRates[currency.code];
  if (!rate) {
    return price; // Default to base price if rate not found
  }
  const convertedPrice = price * rate;
  return convertedPrice.toFixed(2);
};
