import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faShoppingCart} />;
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProduct(data)
            })
    }, [])

    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    const handelSearch = event => {
        const searchText = (event.target.value);
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchProduct);
    }

    return (
        <div>
            <div className='search-btn'>
                <input onChange={handelSearch} className='' type="text" placeholder="Search Your Products" />
                <a href="/review"><span className="icon">{element}</span></a>

            </div>
            <div className='shop'>
                <div className="product">
                    {
                        displayProduct.map(product => <Product product={product}
                            handelAddToCart={handelAddToCart}></Product>)
                    }
                </div>
                <div className="order">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;