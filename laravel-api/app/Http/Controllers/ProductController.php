<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Display a listing of the products
    public function index()
    {
        $products = Product::all(); // Fetch all products

        return Inertia::render('Dashboard', [
            'products' => $products, // Pass products to the dashboard view
        ]);
    }

    // Show the form for creating a new product
    public function create()
    {
        // This can return a view if you want to create a form
    }

    // Store a newly created product in storage
    public function store(Request $request)
    {
        $request->validate([
            'item_barcode' => 'required|unique:products|max:255',
            'product_description' => 'required',
            'price' => 'required|numeric',
            'available_quantity' => 'required|integer',
            'category' => 'required|max:255',
        ]);

        $product = Product::create($request->all());

        return response()->json($product, 201);
    }

    // Display the specified product
    public function show(Product $product)
    {
        return response()->json($product);
    }

    // Show the form for editing the specified product
    public function edit(Product $product)
    {
        // This can return a view if you want to create a form for editing
    }

    // Update the specified product in storage
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'item_barcode' => 'required|max:255|unique:products,item_barcode,' . $product->id,
            'product_description' => 'required',
            'price' => 'required|numeric',
            'available_quantity' => 'required|integer',
            'category' => 'required|max:255',
        ]);

        $product->update($request->all());

        return response()->json($product);
    }

    // Remove the specified product from storage
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
