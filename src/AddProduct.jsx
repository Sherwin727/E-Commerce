import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCart } from './assets/CartContext'; // Import the cart context


const AddProduct = () => {

    const [product, setProduct] = useState({
        id: '',
        description: '',
        price: '',
        quantity: '',
        category: '',
    });

    const { addToCart } = useCart(); // Access the addToCart function from the context

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure all fields are filled
        const { id, description, price, quantity, category } = product;

        if ([id, description, price, quantity, category].includes('')) {
            return alert('Please fill in all fields');
        }

        // Add the product to the cart
        addToCart({
            id,
            description,
            price: parseFloat(price), // Ensure numerical values are of the correct type
            quantity: parseInt(quantity, 10),
            category,
        });

        // Reset form fields
        setProduct({ id: '', description: '', price: '', quantity: '', category: '' });
        alert('Product added to the cart!');
    };

    return (
        <div className="AddProd-Container">
            <div className="Insert-Box">
                <h2 style={{ textAlign: 'center' }}>Add New Product to Cart</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formId">
                        <Form.Label>ID:</Form.Label>
                        <Form.Control
                            type="text"
                            name="id"
                            value={product.id}
                            onChange={handleChange}
                            placeholder="Enter the Product ID"
                            required
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formDescript">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            placeholder="Enter the Description"
                            required
                            rows={3}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formPrice">
                        <Form.Label>Price:</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            placeholder="Enter the Price"
                            required
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formQuantity">
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control
                            type="number"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                            placeholder="Enter the Quantity"
                            required
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formCategory">
                        <Form.Label>Category:</Form.Label>
                        <Form.Select
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Books">Books</option>
                            <option value="Food">Food</option>
                        </Form.Select>
                    </Form.Group>
                    <br />
                    <Button
                        className="submit-btn"
                        variant="dark"
                        type="submit"
                        style={{ width: '100%' }}
                    >
                        Add Product to Cart
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddProduct;
