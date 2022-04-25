<?php

namespace App\Http\Controllers;

use App\Models\Book;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = Book::query();

        if (\request('search')){
            $query->where('name', 'LIKE', '%'.\request('search').'%');
        }

        return Inertia::render('Books', [
            'books' => $query->paginate(),
        ]);

    }

    public function likeBook($id)
    {
        $book = Book::find($id);
        $book->like();
        $book->save();
        return back();
    }

    public function unlikeBook($id)
    {
        $book = Book::find($id);
        $book->unlike();
        $book->save();
        return back();
    }

    public function showLikes($id)
    {
        $book = Book::find($id);

        return Inertia::render('Books', [
            'like_count' => $book->likeCount
        ]);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Book $id)
    {
        return Inertia::render('SingleBook', [
            'books' => Book::find($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
