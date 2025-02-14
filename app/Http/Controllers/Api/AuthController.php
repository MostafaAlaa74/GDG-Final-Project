<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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


    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();


        return response()->json([
            "Massege" => "You Are Logedout"
        ], 200);
    }
}
