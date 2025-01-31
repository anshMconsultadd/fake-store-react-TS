import React from "react";
import { Product } from "../type";

interface ProductProps{
    product:Product;
    deleteP:(id:number)=>void;
}

const ProductCard:React.FC<ProductProps>=({product,deleteP})=>{
    const { title, price, category, image, rating = { rate: 0, count: 0 } } = product; 
    return (
        <div className="bg-white shadow-lg rounded-xl p-4 max-w-sm">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-bold mt-2">{title}</h3>
          <p className="text-gray-600">Rs{price}</p>
          <p className="text-sm text-gray-500">{category}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-yellow-500">{rating?.rate} ★</p> 
            <button
              onClick={() => deleteP(product.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      );

}
export default ProductCard;
