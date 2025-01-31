import React from "react";
import { Product } from "../type";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Product[];
    onDelete: (id: number) => void;
  }

  const ProductList:React.FC<ProductListProps>=({products,onDelete})=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} deleteP={onDelete} />
      ))}
    </div>
    )
  }

  export default ProductList;