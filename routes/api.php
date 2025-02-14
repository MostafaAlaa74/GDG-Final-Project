<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// User Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post("/login", [AuthController::class, "login"]);
Route::post("/logout", [AuthController::class, "logout"])->middleware('auth:sanctum');
// Product Routes
Route::apiResource("/product", ProductController::class);
// Category Routes
Route::apiResource("/category", CategoryController::class);
// Cart  Routes
Route::post("/cart/add", [CartController::class, 'addtocart']);
Route::put("/cart/update/{id}", [CartController::class, 'updatecart']);
Route::get("/cart/show/{id}", [CartController::class, 'showcart']);
Route::delete("/cart/delete/{id}", [CartController::class, 'removecart']);
// Route::delete("/cart/deleteproduct/{id}" , [CartController::class , 'removeFromCart']);