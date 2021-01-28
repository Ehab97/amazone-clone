import { useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch, useHistory}from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Header from './component/layout/Header';
import Checkout from './component/proudcts/Checkout.jsx';
import Login from './component/registeration/Login';
import { auth } from './config/firbase';
import { useStateValue } from './store/StateProvider';

function App() {
  const history=useHistory();
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log(`the auth user is logged in ${authUser}`,authUser);
      if(authUser){
        //the user logged in
        dispatch({
          type:'ADD_USER',
          user:authUser
        })
        // history.push('/');
      }else{
        //user is logged out
        dispatch({
          type:'ADD_USER',
          user:null
        })
        // history.push('/login')
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
         <div className="wrapper">
            <Route exact path="/">
               <Header />
              <Home/>
            </Route>
            <Route exact path="/checkout">
            <Header />
              <Checkout />
            </Route>
           <Route exact path="/login" component={Login} ></Route>
         </div>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
