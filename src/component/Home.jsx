import React,{useEffect} from 'react'
import background from '../assets/images/movies.jpeg'
// import images from '../assets/images/product/'
import images1 from '../assets/images/product/1.jpg'
import images2 from '../assets/images/product/2.jpg'
import images3 from '../assets/images/product/3.jpg'
import images4 from '../assets/images/product/4.jpg'
import images5 from '../assets/images/product/5.jpg'
import images6 from '../assets/images/product/6.jpg'
import './home.css'
import Product from './proudcts/Product'
function Home() {
     // console.log(images);
     const product=[{
          id:1,
          title :'The new adventrue part',
          price:10,
          rating:5,
          image:`${images1}`

     },
     {
          id:5,
          title :'The new adventrue part 5',
          price:10,
          rating:5,
          image:images2

     },
     {
          id:451,
          title :'The new adventrue part4',
          price:10,
          rating:5,
          image:images3

     },
     {
          id:500,
          title :'The new adventrue par3',
          price:10,
          rating:5,
          image:images4

     },
     {
          id:2,
          title :'The new adventrue part 2',
          price:10,
          rating:5,
          image:images5
     },  {
          id:8,
          title :'The new adventrue par3',
          price:10,
          rating:5,
          image:images6

     },  {
          id:3,
          title :'The new adventrue par3',
          price:10,
          rating:5,
          image:images4

     }]
     return (
          <div className="content">
              <img className="home__image" src={background} alt=""/>
              <div className="home__row">
                    {
                         product.map(item=>(
                          <Product 
                              key={item.id}
                              id={item.id}
                              title={item.title}
                              price={item.price}
                              rating={item.rating}
                              image={item.image}
                              />    
                         ))
                    }       
              </div>
          </div>
     )
}

export default Home
