import React from "react";
import { Product } from "../type";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
        Explore Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} deleteP={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
