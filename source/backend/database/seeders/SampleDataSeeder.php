<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

use App\Models\ExampleModel;

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

        for ($i = 0; $i < 50; $i++) {
            print ".";
            ExampleModel::create([
                "title" => $faker->word,
                "body" => $faker->sentence,
            ]);
        }
    }
}
