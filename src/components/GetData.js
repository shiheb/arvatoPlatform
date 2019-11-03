import axios from 'axios';

// TMDB Info/Credentials
const base_url = "./products.json";
/*const api_key = "39b616a19667f17d8ffcaa175fc93491";*/


export function data() {
   return axios.get(`${base_url}`)
       .then(res => res.data.products) 
}