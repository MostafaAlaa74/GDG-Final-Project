<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            "fName" => "required|string|max:60",
            "lName" => "required|string|max:60",
            "email" => "required|email|unique:users",
            "password" => "required|string|min:3|confirmed",
            "gender" => "required|string"
        ]);
        $name = $data["fName"] . " " . $data["lName"];
        $user = User::create([
            "name" => $name,
            "email" => $data['email'],
            "password" => Hash::make($data['password']),
            'gender' => $data['gender']
        ]);
        $token = $user->createToken($name)->plainTextToken;

        return response()->json([
            "data" => $user,
            "token" => $token
        ], 200);
    }


    public function login(Request $request)
    {
        $data = $request->validate([
            "email" => "required|email|exists:users",
            "password" => "required|min:3|string"
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            $token = $user->createToken($user->name)->plainTextToken;

            return response()->json([
                "data" => $user,
                "token" => $token
            ], 200);
        }

        return ([
            "Error" => "There Is An Error Here"
        ]);
    }

    public function uploadImage(Request $request){
        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if ($request->hasFile('image')) {
            $image = $request->file('image');

            $imagename = time() . "." . $image->extension();

            $image->move(public_path('storage/productsImage'), $imagename);

            $imagePath = '/storage/productsImage/' . $imagename;
        }
        $user = Auth::user();
        
        $all = User::create([
            'imagePath' => $imagePath
        ]);
        return([
            "massege" => "Photo Updated.",
            'data' => $all
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();


        return response()->json([
            "Massege" => "You Are Logedout"
        ], 200);
    }
}
