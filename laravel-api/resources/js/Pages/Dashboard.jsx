import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import axios from 'axios';

export default function Dashboard({ products }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [barcode, setBarcode] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    const handleAddClick = () => {
        setShowModal(true);
        setIsEditMode(false);
    }
    const handleAddProduct = async (e) =>{
        e.preventDefault();
        try{
            await axios.post(`/api/products`, {
                item_barcode: barcode,
                product_description: description,
                available_quantity: quantity,
                price: price,
                category: category
            });
            setShowModal(false);
        }catch(error){
            console.error("Error adding product, reason:", error);
        }
    };
    
    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setBarcode(product.item_barcode);
        setDescription(product.product_description);
        setQuantity(product.available_quantity);
        setPrice(product.price);
        setCategory(product.category);
        setShowModal(true);
        setIsEditMode(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        
        try {
            // Update the product in the backend
            await axios.put(`/api/products/${selectedProduct.id}`, {
                item_barcode: barcode,
                product_description: description,
                available_quantity: quantity,
                price: price,
                category: category,
            });

            // Close the modal and refresh the page to show updated data
            setShowModal(false);
            window.location.reload();
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        if (confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`/api/products/${productId}`);
                // Refresh the page to show updated data after deletion
                window.location.reload();
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard

            
                <div>
                    <button
                        onClick={handleAddClick}
                        type="submit"
                        className="bg-blue-500 text-white px-3 py-2 rounded ">
                        Add
                    </button>
                </div>
                </h2>
            }
        >
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <form >
                    <input
                    className="text-black px-2 py-1 rounded"
                    type="text"
                    placeholder="Search...">
                    </input>
                    <button
                    className="bg-blue-500 text-white px-4 py-2 rounded">
                        Search
                    </button>
                </form>
            </div>
            <Head title="Dashboard" />

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
                                                        onClick={() => handleEditClick(product)}
                                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteProduct(product.id)}
                                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    <p>No products available...</p><br/>
                                    <p>Would you like to add one?</p>
                                    <div>
                                        <button
                                            onClick={() => handleAddClick()}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Add Product
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for editing */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">

                        <h2 className="text-lg font-semibold mb-4">
                            {isEditMode ? "Edit Product" : "Add Product"}
                        </h2>

                        <form onSubmit=
                            {isEditMode ? handleUpdateProduct : handleAddProduct}
                        >
                            <label className="block">
                                Barcode:
                                <input
                                    type="text"
                                    value={barcode}
                                    onChange={(e) => setBarcode(e.target.value)}
                                    className="border rounded w-full p-2 mt-1"
                                />
                            </label>
                            <label className="block mt-4">
                                Description:
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="border rounded w-full p-2 mt-1"
                                />
                            </label>
                            <label className="block mt-4">
                                Quantity:
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="border rounded w-full p-2 mt-1"
                                />
                            </label>
                            <label className="block mt-4">
                                Price:
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="border rounded w-full p-2 mt-1"
                                />
                            </label>
                            <label className="block mt-4">
                                Category:
                                <input
                                    type="text"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="border rounded w-full p-2 mt-1"
                                />
                            </label>
                            <div className="flex justify-end mt-6">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="bg-gray-300 px-4 py-2 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    {isEditMode ? "Update" : "Add"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
