import { create } from 'zustand';
import { Product, Customer, Sale, CreditAccount, Promotion } from '../types';

interface Store {
  products: Product[];
  customers: Customer[];
  sales: Sale[];
  creditAccounts: CreditAccount[];
  promotions: Promotion[];
  
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  
  addCustomer: (customer: Customer) => void;
  updateCustomer: (customer: Customer) => void;
  deleteCustomer: (id: string) => void;
  
  addSale: (sale: Sale) => void;
  updateSale: (sale: Sale) => void;
  deleteSale: (id: string) => void;
  
  addPromotion: (promotion: Promotion) => void;
  updatePromotion: (promotion: Promotion) => void;
  deletePromotion: (id: string) => void;
}

export const useStore = create<Store>((set) => ({
  products: [],
  customers: [],
  sales: [],
  creditAccounts: [],
  promotions: [],
  
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  updateProduct: (product) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === product.id ? product : p
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
    
  addCustomer: (customer) =>
    set((state) => ({ customers: [...state.customers, customer] })),
  updateCustomer: (customer) =>
    set((state) => ({
      customers: state.customers.map((c) =>
        c.id === customer.id ? customer : c
      ),
    })),
  deleteCustomer: (id) =>
    set((state) => ({
      customers: state.customers.filter((c) => c.id !== id),
    })),
    
  addSale: (sale) =>
    set((state) => ({ sales: [...state.sales, sale] })),
  updateSale: (sale) =>
    set((state) => ({
      sales: state.sales.map((s) =>
        s.id === sale.id ? sale : s
      ),
    })),
  deleteSale: (id) =>
    set((state) => ({
      sales: state.sales.filter((s) => s.id !== id),
    })),
    
  addPromotion: (promotion) =>
    set((state) => ({ promotions: [...state.promotions, promotion] })),
  updatePromotion: (promotion) =>
    set((state) => ({
      promotions: state.promotions.map((p) =>
        p.id === promotion.id ? promotion : p
      ),
    })),
  deletePromotion: (id) =>
    set((state) => ({
      promotions: state.promotions.filter((p) => p.id !== id),
    })),
}));