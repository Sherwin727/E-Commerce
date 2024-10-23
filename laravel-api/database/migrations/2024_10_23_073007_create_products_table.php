<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('item_barcode');
            $table->string('product_description');
            $table->decimal('price', 8, 2);
            $table->integer('available_quantity');
            $table->string('category');
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Foreign key for users
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
}
