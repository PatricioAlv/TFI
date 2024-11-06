export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  currentDebt: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sale {
  id: string;
  productId: string;
  customerId?: string;
  quantity: number;
  price: number;
  paymentMethod: 'cash' | 'transfer' | 'credit' | 'debit';
  discount?: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreditAccount {
  id: string;
  customerId: string;
  balance: number;
  limit: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Promotion {
  id: string;
  name: string;
  type: 'percentage' | 'fixed';
  value: number;
  startDate: Date;
  endDate: Date;
  productIds?: string[];
  minimumPurchase?: number;
  active: boolean;
}