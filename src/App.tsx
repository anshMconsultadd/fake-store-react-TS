import React, { useState, useEffect } from "react";
import { getAllProducts, deleteProduct, addProduct } from "./services/api";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import { Product } from "./type";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.log(error);
      console.error("Error in fetching products", error);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error in deleting product", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (product: Product) => {
    try {
      const newProduct = await addProduct(product);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } catch (error) {
      console.error("Error in adding product", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Product Store</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ProductList products={products} onDelete={handleDeleteProduct} />
        </div>
        <div className="mt-10">
          <AddProductForm onAddProduct={handleAddProduct} />
        </div>
      </div>
    </div>
  );
};

export default App;
