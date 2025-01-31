import React, { useState, } from 'react';
import { addProduct } from '../services/api';
import  {Product}   from "../type";

interface AddProdcutFormProps {
    onAddProduct: (product: Product) => void;
}

const AddProductForm :React.FC<AddProdcutFormProps>=({onAddProduct})=>{
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [rating, setRating] = useState<{ rate: number; count: number }>({ rate: 0, count: 0 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      title,
      price: parseFloat(price),
      category,
      image,
      rating, 
    };

    try {
      const addedProduct = await addProduct(newProduct); 
      console.log(addedProduct);

      
      onAddProduct(addedProduct);

      
      setPrice('');
      setDescription('');
      setCategory('');
      setImage('');
      setRating({ rate: 0, count: 0 }); 
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded-md">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <label className="block mb-2">
        Title:
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        Price:
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded-md"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        Description:
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        Category:
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        Image URL:
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded-md"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        Rating:
        <div className="flex gap-4">
          <input
            type="number"
            min="0"
            max="5"
            className="w-1/2 p-2 mt-1 border rounded-md"
            value={rating.rate}
            onChange={(e) => setRating({ ...rating, rate: parseInt(e.target.value) })}
          />
          <input
            type="number"
            min="0"
            className="w-1/2 p-2 mt-1 border rounded-md"
            value={rating.count}
            onChange={(e) => setRating({ ...rating, count: parseInt(e.target.value) })}
          />
        </div>
      </label>
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
