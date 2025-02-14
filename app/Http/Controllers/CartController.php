<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function addtocart(Request $request)
    {
        $cartitem = $request->validate([
            "product_id" => "required|exists:products,id",
            "quantity" => 'required|integer|min:1'
        ]);
        $cartitem = Cart::where('user_id', Auth::id())->where('product_id', $request->product_id)->first();
        if ($cartitem) {
            $newquantity = [$cartitem["quantity"] += $request->quantity];
            $cartitem->update($newquantity);
            return ([
                "Message" => "The Product quantity increased",
                "item" => $cartitem
            ]);
        } else {
            $item = Cart::create([
                'product_id' => $request->product_id,
                'quantity' => $request->quantity
            ]);
            return ([
                "Message" => "The Product Added to the cart",
                "item" => $item
            ]);
        }
    }

    public function updatecart(Request $request, $id)
    {
        $request->validate(["quantity" => 'required|integer|min:1']);
        $cartitem = Cart::where('id', $id)->where('user_id', Auth::id())->first();
        if (!$cartitem) {
            return ([
                "Error" => "This Cart Is Not Exist"
            ]);
        }
        $cartitem->update(["quantity" => $request->quantity]);
        return ([
            "Message" => "The Quantity increased",
            "item" => $cartitem
        ]);
    }

    public function showcart($id)
    {
        $cart = Cart::where('id', $id)->first();
        return ([
            'the cart' => $cart
        ]);
    }

    public function removecart($id)
    {
        $cart = Cart::where('id', $id)->first();
        if (!$cart) {
            return ([
                "Error" => "This Cart Is Not Exist"
            ]);
        }
        $cart->delete();
        return ([
            "message" => "The Cart Deleted"
        ]);
    }

    // public function removePeoductFromcart($id){
    //     $cart = Cart::where('id' , $id)->first();
    //     $cart->product_id->delete();
    //     return([
    //         "message" => "The Cart Deleted"
    //     ]);
    // }



}
