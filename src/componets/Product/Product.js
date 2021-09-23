import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    const element = <FontAwesomeIcon icon={ faShoppingCart} />;
    
    return (
        <div className='product-all'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='details'>
                <h6 className="product_name">{name}</h6>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handelAddToCart(props.product)} className="cart"><strong>{element} add to cart</strong></button>
            </div>
        </div>
    );
};

export default Product;