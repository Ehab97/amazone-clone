import React from 'react'
import { useStateValue } from '../../store/StateProvider';
import img from '../../assets/images/checkout.png';
import './product.css';
import Grid from '@material-ui/core/Grid';
import CheckoutProudct from './CheckoutProudct';
import { BackspaceTwoTone } from '@material-ui/icons';
function Checkout() {
     var count = 0;
     const [{basket},dispatch]=useStateValue();
     basket.map(item=>count+=item.price);
     return (
          <div className="checkout content">
               <img src={img} alt="" className="checkout_ad"/>
               {
                    basket?.length===0?(
                         <div>
                              <h2>Your basket is empty.</h2>
                         </div>
                    ):(
                        <div>
                             <h2>your shopping basket is :</h2>
                             <Grid container spacing={3}>
                                  {
                                  basket.map(item=>(
                                  <CheckoutProudct id={item.id} title={item.title} image={item.image} price={item.price}
                                       rating={item.rating} />
                                  ))
                                  }
                                  <Grid xs={2}>
                                       <div className="checkout__total">
                                            <p>Suptotal ({basket.length} items) :
                                                 <strong><small>$</small>{count}</strong>
                                            </p>
                                            <div>
                                                 <input type="checkbox" name="" />
                                                 <span>this contain a gift</span>
                                                 <button className="checkout__button">procced to the checkout</button>
                                            </div>
                                       </div>
                                  </Grid>
                             </Grid>
                        </div>
                    )
               }
          </div>
     )
}

export default Checkout
