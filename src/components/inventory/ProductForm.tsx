import React from 'react';
import { useForm } from 'react-hook-form';
import { Product } from '../../types';
import { useStore } from '../../store/useStore';

type ProductFormData = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

interface ProductFormProps {
  product?: Product;
  onClose: () => void;
}

export function ProductForm({ product, onClose }: ProductFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
    defaultValues: product || {
      name: '',
      price: 0,
      stock: 0,
    },
  });

  const { addProduct, updateProduct } = useStore();

  const onSubmit = (data: ProductFormData) => {
    if (product) {
      updateProduct({
        ...product,
        ...data,
        updatedAt: new Date(),
      });
    } else {
      addProduct({
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre del Producto
        </label>
        <input
          type="text"
          {...register('name', { required: 'Este campo es requerido' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Precio
        </label>
        <input
          type="number"
          step="0.01"
          {...register('price', {
            required: 'Este campo es requerido',
            min: { value: 0, message: 'El precio debe ser mayor a 0' },
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.price && (
          <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Stock
        </label>
        <input
          type="number"
          {...register('stock', {
            required: 'Este campo es requerido',
            min: { value: 0, message: 'El stock no puede ser negativo' },
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.stock && (
          <p className="mt-1 text-sm text-red-600">{errors.stock.message}</p>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
        >
          {product ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  );
}