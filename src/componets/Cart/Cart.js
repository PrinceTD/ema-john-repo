import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = 3.99;
    const tex = (total + shipping) * 10;
    const orderTotal = (total + shipping + tex);

    return (
        <div className='total-cart'>
            <div className='cart-details'>
                <h3>Order Summary:</h3>
                <p>Item order: {props.cart.length}</p>
            </div>
            <div>
                <span className="total">
                    <small>Item:</small>
                    <small>$ {total.toFixed(2)}</small>
                </span>
                <span className="total">
                    <small>Shipping:</small>
                    <small>$ {shipping}</small>
                </span>
                <span className="total">
                    <small>Tex</small>
                    <small>$ {tex.toFixed(2)}</small>
                </span>
            </div>
            <div className="cart-details">

                <span className='total'>
                    <h5>Order Total:</h5>
                    <h5>$ {orderTotal.toFixed(2)}</h5>
                </span>
                <button className="buy"><strong><small>Buy Now</small></strong></button>
            </div>
        </div>
    );
};

export default Cart;