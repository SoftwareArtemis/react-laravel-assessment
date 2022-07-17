<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Models\ExampleModel;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index(): \Illuminate\Http\JsonResponse
    {
        $exampleData = new ExampleModel;
        $exampleData = $exampleData->exampleData();
        // your code here
        return response()->json([
            "success" => true, 
            "data" => $exampleData
        ]);
    }
}
