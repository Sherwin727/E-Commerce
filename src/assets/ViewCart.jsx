import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart } = useCart();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.description} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;