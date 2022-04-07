<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Book extends Model
{
    use HasFactory;

    protected $appends = ['image_path'];
//    public function getAllBooks()
//    {
//        return Book::all();
//    }

    public function getImagePathAttribute(){

        $img = $this->attributes['image'];

        return asset('/storage/' . str_replace('\\', '/', $img));

    }
}
