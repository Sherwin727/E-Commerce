import React, { createContext, useContext, useState } from 'react';

// Create the context for the cart
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// CartProvider component to wrap the app and provide cart functionality
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if the product already exists in the cart
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                // Update the quantity if the product is already in the cart
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                // Add a new product to the cart
                return [...prevCart, product];
            }
        });
    };

    // Function to get the total count of items in the cart
    const getCartCount = () => {
        // Sum the quantity of all products in the cart
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Function to get the total price of items in the cart
    const getCartTotal = () => {
        // Sum the total price of all products (price * quantity)
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, getCartCount, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};
