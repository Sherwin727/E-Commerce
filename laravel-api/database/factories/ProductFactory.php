<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        return [
            'item_barcode' => $this->faker->unique()->ean13(), // Ensure uniqueness and use a barcode format
            'product_description' => $this->faker->sentence(3),
            'price' => $this->faker->randomFloat(2, 1, 100), // Random price between 1 and 100
            'available_quantity' => $this->faker->numberBetween(1, 50), // Random quantity between 1 and 50
            'category' => $this->faker->word(), // Random category
        ];
    }
}
