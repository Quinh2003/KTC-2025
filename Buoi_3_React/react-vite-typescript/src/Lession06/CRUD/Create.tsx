import React from 'react';

type Props = {
  onCreated?: (product: any) => void;
};

const url = 'https://api.escuelajs.co/api/v1/products';

export default function Create({ onCreated }: Props) {
  const [formData, setFormData] = React.useState({
    title: '',
    price: '',
    description: '',
    categoryId: '',
    images: ['']
  });

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
      ...formData,
      price: parseFloat(formData.price),
      categoryId: parseInt(formData.categoryId)
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log('Product created successfully:', data);
      
      setFormData({
        title: '',
        price: '',
        description: '',
        categoryId: '',
        images: ['']
      });

      alert('Product created successfully!');
      if (onCreated && typeof onCreated === 'function') {
        onCreated(data);
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error creating product. Please try again.');
    }
  };

  return (
    <div>
      <form className='w-full p-4 bg-white rounded shadow mb-4' onSubmit={handleSubmit}>
        <h2 className='text-xl font-bold mb-4'>Create Product</h2>
        
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
            className='w-full p-2 border border-gray-300 rounded h-24' 
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

        <button 
          type='submit' 
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors'
        >
          Create Product
        </button>
      </form>
    </div>
  );
}