import React, { useState } from "react";
import { addProduct } from "../services/api";
import { Product } from "../type";

interface AddProductFormProps {
  onAddProduct: (product: Product) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onAddProduct }) => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("mens clothing");
  const [image, setImage] = useState<string>("");
  const [rating, setRating] = useState<{ rate: number; count: number }>({
    rate: 0,
    count: 0,
  });

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

      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("mens clothing");
      setImage("");
      setRating({ rate: 0, count: 0 });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-xl p-8 rounded-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <div className="space-y-4">
        <label className="block">
          Title:
          <input
            type="text"
            className="w-full p-3 mt-1 border rounded-md focus:outline-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="block">
          Price:
          <input
            type="text"
            className="w-full p-3 mt-1 border rounded-md focus:outline-blue-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className="block">
          Description:
          <input
            type="text"
            className="w-full p-3 mt-1 border rounded-md focus:outline-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="block">
          Category:
          <select
            className="w-full p-3 mt-1 border rounded-md focus:outline-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="mens clothing">Men's Clothing</option>
            <option value="womens clothing">Women's Clothing</option>
            <option value="jewellery">Jewellery</option>
            <option value="electronics">Electronics</option>
          </select>
        </label>
        <label className="block">
          Image URL:
          <input
            type="text"
            className="w-full p-3 mt-1 border rounded-md focus:outline-blue-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label className="block">
          Rating:
          <div className="flex gap-4">
            <input
              type="number"
              min="0"
              max="5"
              className="w-1/2 p-3 mt-1 border rounded-md focus:outline-blue-500"
              value={rating.rate}
              onChange={(e) =>
                setRating({ ...rating, rate: parseInt(e.target.value) })
              }
            />
            <input
              type="number"
              min="0"
              className="w-1/2 p-3 mt-1 border rounded-md focus:outline-blue-500"
              value={rating.count}
              onChange={(e) =>
                setRating({ ...rating, count: parseInt(e.target.value) })
              }
            />
          </div>
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md transition duration-300"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
