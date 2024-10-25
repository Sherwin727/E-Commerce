import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UpdateProduct = ({ onUpdateProduct }) => {
    const [product, setProduct] = useState({
        id: '',
        description: '',
        price: '',
        quantity: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { id, description, price, quantity, category } = product;

        if ([id, description, price, quantity, category].includes('')) {
            return alert('Please fill in all fields');
        }

        onUpdateProduct(product);
        setProduct({ id: '', description: '', price: '', quantity: '', category: '' });
    };

    return (
        <div className="AddProd-Container">
            <div className="Insert-Box">
                <h2 style={{ textAlign: 'center' }}>Edit Product</h2>
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
                    <Button className="submit-btn" variant="dark" type="submit" style={{ width: '100%' }}>Update Product</Button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateProduct;
