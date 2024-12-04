import React from 'react';
import { useCart } from './assets/CartContext'; // Import the cart context

const CartCount = () => {
    const { getCartCount } = useCart(); // Access the getCartCount function from the context

    return (
        <div className="cart-count">
            <span>Items in Cart: {getCartCount()}</span>
        </div>
    );
};

export default CartCount;
