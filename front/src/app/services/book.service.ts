import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = `${environment.apiUrl}api/books`;

  constructor(private http: HttpClient, private router: Router) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl); 
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  editBook(book: Book): void {
    this.router.navigate(['/edit', book.id]);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: {title: string, author: string, genre: string, year: number, cover: string}): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }

  updateBook(id: number, book: Book): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, book);
  }

}
