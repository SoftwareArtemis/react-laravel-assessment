<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('example_data', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("body");
            $table->timestamps();
        });

        Schema::create('example_categories', function (Blueprint $table) {
            $table->id();
            $table->string("category_name");
            $table->timestamps();
        });

        Schema::create('example_data_categories', function (Blueprint $table) {
            $table->bigInteger("data_id")->unsigned();
            $table->bigInteger("category_id")->unsigned();

            /**
             * Relations
             */
            $table
                ->foreign("data_id")
                ->references("id")
                ->on("example_data");

            $table
                ->foreign("category_id")
                ->references("id")
                ->on("example_categories");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('example');
        Schema::dropIfExists('example_categories');
        Schema::dropIfExists('example_data_categories');
    }
};
