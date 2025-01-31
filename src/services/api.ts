import axios from "axios";

import { Product } from "../type";

const API_URL = 'https://fakestoreapi.com/products';

export const getAllProducts=async():Promise<Product[]>=>{
    const response = await axios.get<Product[]>(API_URL);
  return response.data;
}

export const deleteProduct=async(id:number):Promise<void>=>{
  await axios.delete(`${API_URL}/${id}`);
}

export const addProduct=async(product:Product):Promise<Product>=>{
    const response = await axios.post<Product>(API_URL,product);
    return response.data;
}