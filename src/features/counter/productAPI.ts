import axios from 'axios'
import { Product } from './Product.ts';

const SERVER = "http://localhost:4000/products";

export const fetchProducts = async (): Promise<Product[]> => {
   const response = await axios.get(SERVER);
   return response.data;
};

// export function fetchProds() {
//    return axios.get(SERVER).then(res => res.data)
// }
