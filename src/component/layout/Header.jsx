import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search'
import ShopingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../../store/StateProvider';
import { auth } from '../../config/firbase';
function Header() {
     const [{basket,user},dispatch]=useStateValue();
     const handleAuthenticaton = () => {
          if (user) {
            auth.signOut();
          }
        }
     console.log(user);
return (
<nav className="header sticky">
     <Link to="/">
     <img className="header__logo" src={logo} alt="amazon logo" />
     </Link>
     <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
     </div>
     <div className="header__nav">
          <Link className="header__link" to="/login">
          <div onClick={handleAuthenticaton} className="header__option">
               <span className="header__option__lineOne">Hello {user?user.email:'Guest'}</span>
               <span className="header__option__lineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
          </Link>
          <Link className="header__link" to="/">
          <div className="header__option">
               <span className="header__option__lineOne">Returns</span>
               <span className="header__option__lineTwo"> orders</span>
          </div>
          </Link>
          <Link className="header__link" to="/">
          <div className="header__option">
               <span className="header__option__lineOne">Your</span>
               <span className="header__option__lineTwo">Prime</span>
          </div>
          </Link>
          <Link className="header__link" to="/checkout">
               <div className="header__optionBasket">
                    <ShopingBasketIcon/>
                    <span className="header__option__lineTwo header__basketCount">
                         {basket?.length}</span>
               </div>
          </Link>
     </div>
</nav>
)
}

export default Header