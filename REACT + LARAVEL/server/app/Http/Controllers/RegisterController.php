<?php

namespace App\Http\Controllers;

use App\Models\RegisterUser;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    //

    public function index(Request $req)
    {
        $registerData = new RegisterUser;
        $registerData->firstName = $req->firstName;
        $registerData->lastName = $req->lastName;
        $registerData->email = $req->email;
        $registerData->city = $req->city;
        $registerData->bio = $req->bio;
        $registerData->occupation = $req->occupation;

        if ($registerData->save()) {
            return "You are Successfully Registered";
        } else {
            return "We failed to register you";
        }
    }
}
