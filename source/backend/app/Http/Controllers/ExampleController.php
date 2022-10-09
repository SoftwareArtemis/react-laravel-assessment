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
        $examples = ExampleModel::paginate(50);
        return response()->json([
            "success" => true,
            "data" => $examples,
        ]);
    }
}
