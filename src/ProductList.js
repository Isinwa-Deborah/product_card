import React, { useState } from 'react';
import ProductItem from "./ProductItem";


const ProductList = ({ products }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {

        const newCart = [...cart, product];

        setCart(newCart);

        alert("Product has been added to cart")


    }
    return (
        <div className="productItem">
            {products.map((products) => (
                <ProductItem products={products} key={products.id} handleClick={addToCart} />
            ))}
        </div>
    );
};
export default ProductList;