import React from "react";
import { Product } from "../type";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProductProps {
  product: Product;
  deleteP: (id: number) => void;
}

const ProductCard: React.FC<ProductProps> = ({ product, deleteP }) => {
  const { title, price, category, image, rating = { rate: 0, count: 0 } } = product;

  return (
    <motion.div
      whileHover={{ x: 5, y: -5 }}
      className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-4 max-w-sm hover:scale-105 transform transition-all duration-300"
    >
      
      <div className="relative overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-contain bg-gray-100"
        />
      </div>

     
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">Category: {category}</p>
        <p className="text-xl font-bold text-green-600 mt-2">₹{price}</p>

        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <span className="text-yellow-500 text-lg">{rating.rate} ★</span>
            <span className="text-sm text-gray-400 ml-1">({rating.count} ratings)</span>
          </div>

          
          <button
            onClick={() => deleteP(product.id)}
            className="px-3 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md shadow-md transition duration-300"
          >
            <Trash2 className="inline-block w-4 h-4 mr-1" />
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
