<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

use App\Models\ExampleModel;
use App\Models\ExampleCategoriesModel;

class SampleDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        print "\nSeeding Sample data\n";

        // seeding data
        for ($i = 0; $i < 50; $i++) {
            print ".";
            $item = ExampleModel::create([
                "title" => $faker->word,
                "body" => $faker->sentence
            ]);
            // seeding 2 categories for each item
            if ($item) {
                for ($j = 0; $j <= 1; $j++) {
                    print ".";
                    $category = ExampleCategoriesModel::create([
                        "category_name" => $faker->word
                    ]);
                    if ($category) {
                        \DB::insert("insert into example_data_categories (data_id, category_id) values (?, ?)", [$item->id, $category->id]);
                    }
                }
            }
        }
    }
}
