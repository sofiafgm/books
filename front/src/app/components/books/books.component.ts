import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  providers: [BookService],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{

  books: Book[] = [];

  constructor(public data: BookService) {}

  ngOnInit(): void {
    this.data.getBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
      },
      (error: any) => {
        console.error('Error fetching Books', error);
      }
    );
  }

  deleteBook(id: number): void {
    console.log('Borrando libro con id', id);
    this.data.deleteBook(id).subscribe(
      () => {
        this.books = this.books.filter(book => book.id !== id);
      },
      (error: any) => {
        console.error('Error al borrar el libro', error);
      }
    );
  }

  editBook(book: Book): void {
    this.data.editBook(book);
  }

}
