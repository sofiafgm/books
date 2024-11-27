<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index(Request $request){
        $books = Book::all();
        return response()->json($books);

    }

    public function create(Request $request)
    {

        $book = Book::create([
       'title'=> $request->title,
       'author'=> $request->author,
       'year'=> $request->year,
       'genre'=> $request->genre,
       'cover'=> $request->cover,
        ]);

        return response()->json([
            'message'=> 'Libro agregado',
            'book' => $book,
        ]);
    }

    public function detail(Request $request, $id){
        $book = Book::findOrFail($id);        
        return response()->json($book);
    }

    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        $book->update([
            'title'=> $request->title,
            'author'=> $request->author,
            'year'=> $request->year,
            'genre'=> $request->genre,
            'cover'=> $request->cover,
        ]);

        return response()->json([
            'message'=> 'Libro actualizado',
            'book' => $book,
        ]);
    }

    public function destroy(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        $book->delete();

        return response()->json([
            'message'=> 'Libro eliminado',
        ]);
    }
}
