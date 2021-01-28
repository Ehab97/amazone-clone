import React from 'react'
import { useStateValue } from '../../store/StateProvider'
import './product.css'
function Product({id,title,image,price,rating}) {//{product}
const [{},dispatch]=useStateValue(); 
     const addToBasket=()=>{
          //add item to basket
          dispatch({
               type:'ADD_TO_BASKET',
               item:{
                    id,title,image,price,rating
               }
          })
     }
     return (
         <div className="product" id={id}>
              <div className="product__info">
                   <p>{title}</p>
                   <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                   </p>
                   <div className="product__rating">
                        {
                        Array(rating).fill().map(_=><span>⭐</span>)
                        }
                   </div>
              </div>
              <img src={image} alt="" />
              <button onClick={addToBasket}>Add to basket</button>
         </div>
     )
}

export default Product
