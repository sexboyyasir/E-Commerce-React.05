import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import stars from '../assets/images/star1.png'


export default function Products() {
   
 

const API_KEY =  'https://dummyjson.com/products'

const [products, setProducts] = useState([])

const getProductData = async () =>{

const response = await axios(API_KEY); 

console.log("response", response.data.products);

setProducts(response?.data?.products);
};

useEffect(()=> { 

  getProductData();
},[]);


console.log("products", products);
  return (
    <div className="container">
      
      <input type="Search"
       name="price" 
       id="price"
       onChange={(event)=>{
        console.log("value", event.target.value);
        
       }}
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 outline-none text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6" placeholder="0.00" />
  
      
      <div className=" flex flex-wrap gap-4 center"> 
        {products?.map((item) => (
          <ProductCard  key={item.id} image={item.thumbnail} percent={item.discountPercentage} text={item.
             title}  price={item.price} discountPercentage={item.discountPercentage} star={stars}
             />  
        ))}
</div>
    </div>
  )
}

