import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ products }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
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
                                                    <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                                                    <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No products available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
