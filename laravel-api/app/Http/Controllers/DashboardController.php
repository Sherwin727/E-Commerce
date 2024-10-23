<?php

// app/Http/Controllers/DashboardController.php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        // Fetch products belonging to the authenticated user
        $products = Product::where('user_id', Auth::id())->get();

        return Inertia::render('Dashboard', [
            'products' => $products,
        ]);
    }
}
