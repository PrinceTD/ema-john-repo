import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]=useState([]);

    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handelAddToCart =(product)=>{
       const newCart=[...cart, product];
       setCart(newCart)
    }

    return (
        <div className='shop'>
            <div className="product">
                {
                    products.map(product => <Product product={product} 
                    handelAddToCart={handelAddToCart}></Product>)
                }
            </div>
            <div className="order">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;