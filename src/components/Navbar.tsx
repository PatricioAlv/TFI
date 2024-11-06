import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, Receipt, Tag } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6" />
            <span className="font-bold text-lg">Tienda de Ropa</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/inventory"
              className="flex items-center space-x-1 hover:text-indigo-200"
            >
              <Tag className="w-5 h-5" />
              <span>Inventario</span>
            </Link>
            
            <Link
              to="/sales"
              className="flex items-center space-x-1 hover:text-indigo-200"
            >
              <Receipt className="w-5 h-5" />
              <span>Ventas</span>
            </Link>
            
            <Link
              to="/customers"
              className="flex items-center space-x-1 hover:text-indigo-200"
            >
              <Users className="w-5 h-5" />
              <span>Clientes</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}