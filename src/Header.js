import React from 'react'
import './Header.css';
import amazonlogo from './amazonlogo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        auth.signOut();

    }


    return (
        //USING BEM CONVENTION
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src={amazonlogo} alt="amznlogo" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div className="header__option" onClick={handleAuthentication}>
                        <span className="header__optionLineOne">Hello {user?.displayName}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        {/* the question mark is used as an optional chaining to avoid error show ups and it will handle the error*/}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Header