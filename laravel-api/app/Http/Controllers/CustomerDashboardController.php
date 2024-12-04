<?php

namespace App\Http\Controllers;

use App\Models\Product; // Make sure to import the Product model
use Inertia\Inertia; // Import Inertia for rendering views

class CustomerDashboardController extends Controller
{
    public function index()
    {
        // Fetch all products from the database
        $products = Product::all();

        // Return the CustomerDashboard view with the products data
        return Inertia::render('CustomerDashboard', [
            'products' => $products,
        ]);
    }

    public function shipDetails()
    {
        return Inertia::render('ShippingDetails');
    }



}