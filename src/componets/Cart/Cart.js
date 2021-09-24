import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    const shipping = total > 0 ? 10 : 0;
    const tex = (total + shipping) * 0.10;
    const orderTotal = (total + shipping + tex);

    return (
        <div className='total-cart'>
            <div className='cart-details'>
                <h5><strong>Order Summary</strong></h5>
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
            <br />
            <div className="cart-details">

                <span className='total'>
                    <h6>Order Total:</h6>
                    <h6>$ {orderTotal.toFixed(2)}</h6>
                </span>
                <button className="buy"><strong><small>Buy Now</small></strong></button>
            </div>
        </div>
    );
};

export default Cart;