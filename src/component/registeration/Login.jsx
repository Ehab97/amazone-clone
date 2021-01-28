import React , { useState }from 'react'
import './Login.css'
import logInImg from '../../assets/images/amazon-logo.png'
import { Link,useHistory  } from 'react-router-dom'
import { auth } from '../../config/firbase';
import { useStateValue } from '../../store/StateProvider';
function Login() {
     const history = useHistory();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [{},dispatch]=useStateValue();
     const signIn = e => {
         e.preventDefault();
 
         auth
             .signInWithEmailAndPassword(email, password)
             .then(auth => {
               //    dispatch({
               //         type:'ADD_USER',
               //           email           
               //    })
                 history.push('/')
             })
             .catch(error => alert(error.message))
     }
 
     const register = e => {
         e.preventDefault();
 
         auth
             .createUserWithEmailAndPassword(email, password)
             .then((auth) => {
                 // it successfully created a new user with email and password
               //   dispatch({
               //      type:'ADD_USER',
               //        email           
               // })
                 if (auth) {
                     history.push('/')
                 }
             })
             .catch(error => alert(error.message))
     }

     return (
          <div className="login content">
               <Link to="/">
                 <img src={logInImg} alt=""/>
               </Link>
               <div className="login__container">
                    <h1>Sigh-In</h1>
                    <form action="">
                         
                              <h5 htmlFor="email">E-mail</h5>
                              <input type="email" value={email} 
                              onChange={e=>setEmail(e.target.value)} />
                         
                              <h5 htmlFor="password">Password</h5>
                              <input type="password" value={password}
                               onChange={e=>setPassword(e.target.value)} />
                      
                         <button onClick={signIn} className="login__signInButton">Sign IN</button>
                    </form>
                    <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
               <button onClick={register} className="login__registerButton">Create Your Amozne account</button>
               </div>
          </div>
     )
}

export default Login
