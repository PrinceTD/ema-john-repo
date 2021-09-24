import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, seller, price, stock, star, features } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    // console.log(props)


    return (
        <div className='product-all'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='details'>
                <h6 className="product_name">{name}</h6>
                <p><small>by: {seller}</small></p>
                <p className="rating">
                    <span>
                        ${price}
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button onClick={() => props.handelAddToCart(props.product)} className="cart"><strong>{element} add to cart</strong></button>
                    </span>
                    <span>
                        <Rating 
                            readonly
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                        ></Rating>
                    </span>
                </p>


            </div>
        </div>
    );
};

export default Product;