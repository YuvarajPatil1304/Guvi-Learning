import React, { useContext } from 'react'
import { CartContext } from '../../Context/cartcontext'
import "./style.css"

export default function Cart({ data = {} }) {
  const {cartItems = []} = useContext(CartContext);
  return (
    <div className="container flexbox">
      <div className="row flexbox">
          {cartItems.map((data) => 
            <div className="col-3">
            <img className="image-card" src={data.image}/>
            <h5>{data.name}</h5>
            </div>
            )}
      </div>
    </div>
  )
}
