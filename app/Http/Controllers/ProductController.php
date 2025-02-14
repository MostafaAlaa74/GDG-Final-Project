<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = $request->validate([
            "name" => "required|string|max:65",
            "price" => "required|numeric",
            "category_id" => "required|exists:categories,id",
            "description" => "string|max:100",
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);
        if ($request->hasFile('image')) {
            $imagePath="";
            $image = $request->file('image');

            $imagename = time() . "." . $image->extension();

            $image->move(public_path('storage/productsImage'), $imagename);

            $imagePath = '/storage/productsImage/' . $imagename;
        }
        $all = Product::create([
            'name' => $product['name'],
            'price' => $product['price'],
            'description' => $product['description'],
            'category_id' => $product['category_id'],
            'image' => $imagePath
        ]);

        return ([
            "Message" => "Your Product Added",
            "Product" => $all
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return ([
            "The Product" => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            "name" => "required|string|max:65",
            "price" => "required|numeric",
            "category_id" => "required|exists:categories,id",
            "description" => "string|max:100",
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');

            $imagename = time() . "." . $image->extension();

            $image->move(public_path('storage/productsImage'), $imagename);

            $imagePath = '/storage/productsImage/' . $imagename;
        }

        $product->update([
            'name' => $data['name'],
            'description' => $data['description'],
            'price' => $data['price'],
            'category_id' => $data['category_id'],
            'image' => $imagePath,
        ]);

        return ([
            "Message" => "Your Product Added",
            "Product" => $product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return ([
            "Message" => "The Product Deleted"
        ]);
    }
}
