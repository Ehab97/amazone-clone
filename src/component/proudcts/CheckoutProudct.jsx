import React from 'react'
import './product.css';
import Grid from '@material-ui/core/Grid';
import { useStateValue } from '../../store/StateProvider';
function CheckoutProudct({title,id,image,rating,price}) {
     const [{}, dispatch] = useStateValue();

     const removeFromBasket = () => {
          dispatch({
               type: 'REMOVE_FROM_BASKET',
               id
          });
     }
     return (
            <Grid  xs={3}>
                 <div className="card" id={id} key={id}>
                      <p>{title}</p>
                      <p className="card__price">
                           <small>$</small>
                           <strong>{price}</strong>
                      </p>
                      <div className="card__rating">
                           {
                           Array(rating).fill().map(_=><span>⭐</span>)
                           }

                      </div>
                      <img src={image} alt="" />
                      <button onClick={removeFromBasket}>remove to basket</button>
                 </div>
            </Grid>
     )
}

export default CheckoutProudct
