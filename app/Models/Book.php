<?php

namespace App\Models;

use Conner\Likeable\Likeable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class Book extends Model
{
    use HasFactory, Likeable;

    protected $appends = ['image_path', 'audio_path', 'time_to_read'];


    public function getImagePathAttribute(){

        $img = $this->attributes['image'];

        return asset('/storage/' . str_replace('\\', '/', $img));
    }

    public function getAudioPathAttribute(){

        $aud = $this->attributes['audio'];

        return asset('/storage/' . str_replace('\\\\', '/', $aud));
    }

    public function getTimeToReadAttribute($id)
    {
        $text = $this->attributes['description'];

        $wordCount = str_word_count($text);
        $minutesToRead = round($wordCount / 200);

        if($minutesToRead < 1){
            $minutes = 'less than a minute';
        }else{
            $minutes = $minutesToRead . " min";
        }
        return $minutes;
    }
}
