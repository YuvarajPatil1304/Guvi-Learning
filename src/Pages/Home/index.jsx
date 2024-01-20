import React, { useEffect, useState, useContext } from 'react'
import Product from '../../components/ProductCard'
import { CartContext } from '../../Context/cartcontext';

export default function Index() {

    const { cartItems = [], updateCart = () => {} } = useContext(CartContext);
    const [products, setProducts] = useState([]);


    function handleaddtocart(data){
      console.log(data);
      let cartcopy = [...cartItems];
      cartcopy.push(data);
      updateCart(cartcopy);
      
    }

    useEffect(() => {
        fetch("http://localhost:5173/products.json").then((response) => response.json()).then((result) => setProducts(result.data)).catch((error) => console.log(error));
    },[]);
  return (
    <>
        {products.map((data) => 
          <Product data={data} handleaddtocart={handleaddtocart}/>
        )}
    </>
  )
}
