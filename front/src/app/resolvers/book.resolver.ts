import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

export const bookResolver: ResolveFn<Book> = (route) => {
  const bookService = inject(BookService);
  return bookService.getBookById(Number(route.paramMap.get('id')!));
};
