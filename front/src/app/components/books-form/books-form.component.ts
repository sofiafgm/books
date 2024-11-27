import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books-form.component.html',
  styleUrl: './books-form.component.css'
})
export class BooksFormComponent {
  
 books: any[] = [];
 newBook: {
   id?: number;
   title: string;
   author: string;
   genre: string;
   year: number;
   cover: string;
 } = {title: '', author: '', genre: '', year: 0, cover: ''};

 constructor( private data:BookService, private router:Router, private route: ActivatedRoute) {
   this.route.data.subscribe(data => {
     const book = data['book'];
     if (book) {
       this.newBook = book;
     }  
   });
 }

 addBook(): void {
    if (!this.newBook) return;

    if (this.newBook.id) {
      this.data.updateBook(this.newBook.id, this.newBook).subscribe({
        next: (data: any) => {
          this.router.navigate(['/books']);
        },
        error: (error: any) => {
          console.error('Error al actualizar la película', error);
        }
      });
    } else {
      this.data.addBook(this.newBook).subscribe({
        next: (data: any) => {
          this.books.push(data);
          this.newBook = {title: '', author: '', genre: '', year: 0, cover: ''};
          this.router.navigate(['/books']);
        },
        error: (error: any) => {
          console.error('Error al añadir la película', error);
        }
      });
    }
}

}
