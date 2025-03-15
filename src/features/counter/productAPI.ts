import axios from 'axios'
import { Product } from './Product.ts';
import { combineSlices } from '@reduxjs/toolkit';

const SERVER = "http://localhost:4000/products";

export const fetchProducts = async (): Promise<Product[]> => {
   const response = await axios.get(SERVER);
   return response.data;
};

export const createProduct = async (product: Product):  Promise<Product> => {
   await axios.post<Product>(SERVER, product);
   return product
}

export const updateProd = async(id : number, updatedprod:Product): Promise<Product> => {
   await axios.put<Product>(`${SERVER}/${id}/`, updatedprod);
   return updatedprod
}

   // console.log(11111111111111111);  
   // console.table(product)


// export function fetchProds() {
//    return axios.get(SERVER).then(res => res.data)
// }
