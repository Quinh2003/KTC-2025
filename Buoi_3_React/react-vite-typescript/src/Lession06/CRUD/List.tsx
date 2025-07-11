import React, { useEffect } from 'react';
import Delete from './Delete';
import Update from './Update';

const url = 'https://api.escuelajs.co/api/v1/products';

type Category = {
  id: number;
  name: string;
  image: string;
  slug: string;
};

type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt?: string;
  updatedAt?: string;
};

type Props = {
  reload?: number;
};

export default function List({ reload = 0 }: Props) {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${url}?offset=0&limit=50`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [reload]);

  const handleOnSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleOnUpdated = (product: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
    setSelectedProduct(null);
  };

  const handleOnDeleted = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className='container mx-auto bg-white rounded shadow mb-4 p-4'>
      {loading && <p>Loading...</p>}
      <table className='table-auto w-full border-collapse border border-gray-200 table-hover'>
        <thead>
          <tr>
            <th className='border border-gray-300 p-2'>ID</th>
            <th className='border border-gray-300 p-2'>Image</th>
            <th className='border border-gray-300 p-2'>Title</th>
            <th className='border border-gray-300 p-2'>Price</th>
            <th className='border border-gray-300 p-2'>Category</th>
            <th className='border border-gray-300 p-2'>Description</th>
            <th className='border border-gray-300 p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={index} className='hover:bg-gray-200'>
              <td className='border border-gray-300 p-2 text-right'>{product.id}</td>
              <td className='border border-gray-300 p-2'>
                <img 
                  src={product.images[0]} 
                  alt={product.title} 
                  className='w-16 h-16 object-cover rounded'
                />
              </td>
              <td className='border border-gray-300 p-2 font-bold'>{product.title}</td>
              <td className='border border-gray-300 p-2 text-right'>${product.price}</td>
              <td className='border border-gray-300 p-2'>{product.category.name}</td>
              <td className='border border-gray-300 p-2 max-w-xs truncate'>{product.description}</td>
              <td className='w-1 border border-gray-300 p-2 whitespace-nowrap'>
                <div className='flex justify-end'>
                  <button 
                    onClick={() => handleOnSelect(product)} 
                    className='bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition-colors mr-2'
                  >
                    Edit
                  </button>
                  <Delete
                    productId={product.id}
                    onDeleted={handleOnDeleted}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduct && (
        <Update 
          productId={selectedProduct.id} 
          onUpdated={handleOnUpdated} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}