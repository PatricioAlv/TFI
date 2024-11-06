import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Inventory } from './pages/Inventory';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </main>
          <Toaster position="top-right" />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Resumen de Ventas</h2>
        {/* Dashboard content */}
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Stock Bajo</h2>
        {/* Low stock items */}
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Cuentas por Cobrar</h2>
        {/* Accounts receivable */}
      </div>
    </div>
  );
}

function Sales() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Registro de Ventas</h1>
      {/* Sales management content */}
    </div>
  );
}

function Customers() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gestión de Clientes</h1>
      {/* Customer management content */}
    </div>
  );
}

export default App;