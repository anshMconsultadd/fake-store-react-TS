import React ,{useState,useEffect}from "react";
import {getAllProducts,deleteProduct,addProduct} from "./services/api";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import {Product} from "./type";
const App :React.FC=()=>{
    const[products,setProducts]=useState<Product[]>([]);


    const fetchProducts=async()=>{
        try{
            const fetchedProducts=await getAllProducts();
            setProducts(fetchedProducts);
        }
        catch(error){
            console.log(error);
            console.error("error in fetching products",error);
        }
    };

    const handleDeleteProduct=async(id:number)=>{
      try{
        await deleteProduct(id);
        setProducts((prevProducts)=>prevProducts.filter((product)=>product.id!==id)); 
      }
      catch(error){
        console.error("error in deleting product",error);
      }
    }
    useEffect(()=>{
      fetchProducts();
    },[]);


    const handleAddProduct=async(product:Product)=>{
      try{
        const newProduct=await addProduct(product);
        setProducts((prevProducts)=>[...prevProducts,newProduct]);
      }
      catch(error){
        console.error("error in adding product",error);
      }
    }
    return (
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Product Store</h1>
      
     
      <ProductList products={products} onDelete={handleDeleteProduct}/>
  

      <AddProductForm onAddProduct={handleAddProduct} />
    </div>
    )
}

export default App;