import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const element = <FontAwesomeIcon icon={ faShoppingCart}/>
    return (
        <div>
            
            <div className='header'>
                <img className='logo' src={logo} alt="" />
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="inventory">Manage Inventory here</a>
                    </nav>
            </div>
            
        </div>
    );
};

export default Header;