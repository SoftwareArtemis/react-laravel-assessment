<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExampleCategoriesModel extends Model
{
    use HasFactory;

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = "id";

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "example_categories";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "category_name"
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [];
}
