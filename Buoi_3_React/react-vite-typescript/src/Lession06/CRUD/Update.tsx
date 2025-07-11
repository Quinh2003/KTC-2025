import React, { useEffect } from 'react';

const url = 'https://api.escuelajs.co/api/v1/products';

type Props = {
  productId: number;
  onUpdated?: (product: any) => void;
  onClose?: () => void;
};

export default function Update({ productId, onUpdated, onClose }: Props) {
  const [formData, setFormData] = React.useState({
    title: '',
    price: '',
    description: '',
    categoryId: '',
    images: ['']
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${url}/${productId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        setFormData({
          title: data.title || '',
          price: data.price?.toString() || '',
          description: data.description || '',
          categoryId: data.category?.id?.toString() || '',
          images: data.images || ['']
        });
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    if (id === 'images') {
      setFormData((prev) => ({
        ...prev,
        images: [value]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const submitData = {
      title: formData.title,
      price: parseFloat(formData.price),
      description: formData.description,
      categoryId: parseInt(formData.categoryId),
      images: formData.images
    };

    try {
      const response = await fetch(`${url}/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log('Product updated successfully:', data);

      if (onUpdated && typeof onUpdated === 'function') {
        onUpdated(data);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product. Please try again.');
    }
  };

  return (
    <form className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center' onSubmit={handleSubmit}>
      <div className='bg-white p-8 rounded-lg shadow-lg w-1/3 max-h-96 overflow-y-auto'>
        <h2 className='text-2xl font-semibold mb-4'>Update Product</h2>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='title'>
            Title
          </label>
          <input 
            type='text' 
            id='title' 
            value={formData.title} 
            className='w-full p-2 border border-gray-300 rounded' 
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='price'>
            Price
          </label>
          <input 
            type='number' 
            id='price' 
            value={formData.price} 
            className='w-full p-2 border border-gray-300 rounded' 
            onChange={handleChange}
            step='0.01'
            min='0'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='description'>
            Description
          </label>
          <textarea 
            id='description' 
            value={formData.description} 
            className='w-full p-2 border border-gray-300 rounded h-20' 
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='categoryId'>
            Category ID
          </label>
          <select 
            id='categoryId' 
            value={formData.categoryId} 
            className='w-full p-2 border border-gray-300 rounded' 
            onChange={handleChange}
            required
          >
            <option value=''>Select a category</option>
            <option value='1'>Clothes</option>
            <option value='2'>Electronics</option>
            <option value='3'>Furniture</option>
            <option value='4'>Shoes</option>
            <option value='5'>Others</option>
          </select>
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='images'>
            Image URL
          </label>
          <input 
            type='url' 
            id='images' 
            value={formData.images[0]} 
            className='w-full p-2 border border-gray-300 rounded' 
            onChange={handleChange}
            placeholder='https://example.com/image.jpg'
            required
          />
        </div>

        <div className='flex justify-end gap-2'>
          <button 
            type='button'
            onClick={onClose} 
            className='w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors'
          >
            Close
          </button>
          <button 
            type='submit' 
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors'
          >
            Update Product
          </button>
        </div>
      </div>
    </form>
  );
}