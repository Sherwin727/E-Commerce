import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import axios from 'axios';

export default function CustomerDashboard({ products }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            // If the product is already in the cart, increase the quantity
            setCart(cart.map(item => 
                item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
            ));
        } else {
            // If the product is not in the cart, add it
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality if needed
    };

    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const handleCheckout = () => {
        // Implement checkout logic here
        alert('Proceeding to checkout...');
        href=route('customer.shipDetails');
        // Clear the cart after checkout
        setCart([]);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Customer Dashboard
                </h2>
            }
        >
            <Head title="Customer Dashboard" />

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8" >
                <form onSubmit={handleSearch}>
                    <input
                        className="text-black px-2 py-1 rounded"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded">
                        Search
                    </button>
                </form>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold">Products</h3>
                            {products && products.length > 0 ? (
                                <div className="grid grid-cols-1 gap-4">
                                    {products.map((product) => (
                                        <div key={product.id} className="border border-gray-300 p-4 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p><strong>Barcode:</strong> {product.item_barcode}</p>
                                                    <p><strong>Description:</strong> {product.product_description}</p>
                                                    <p><strong>Quantity:</strong> {product.available_quantity}</p>
                                                    <p><strong>Price:</strong> ${product.price}</p>
                                                    <p><strong>Category:</strong> {product.category}</p>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleAddToCart(product)}
                                                        className="bg-green-500 text-white px-3 py-1 rounded"
                                                    >
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    <p>No products available...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Cart Section */}
            <div className="py-12">
  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h3 className="text-lg text-black font-semibold">Your Cart</h3>
    {cart.length > 0 ? (
      <div className="border border-gray-300 p-4 rounded-lg">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between text-black items-center border border-gray-300 p-4 rounded-lg">
            <p>
              <strong>{item.product_description}</strong> - ${item.price} x {item.quantity}
            </p>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="bg-red-500 text-black px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Calculate and display the total */}
        <div className="mt-4 text-black">
          <h4 className="font-semibold">
            Total: $
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </h4>
        </div>

        <div className="mt-4">
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-black px-4 py-2 rounded"
          >
            <a href={route('customer.shipDetails')}>Checkout</a>
          </button>
        </div>
      </div>
    ) : (
      <p>Your cart is empty.</p>
    )}
  </div>
</div>

        </AuthenticatedLayout>
    );
}