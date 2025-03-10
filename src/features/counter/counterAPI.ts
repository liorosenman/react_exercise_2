import axios from 'axios'

const SERVER = "http://localhost:4000/products"

export function fetchProds() {
   return axios.get(SERVER).then(res => res.data)
}
