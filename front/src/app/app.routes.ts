import { Routes } from '@angular/router';
import { bookResolver } from './resolvers/book.resolver';
import { HomeComponent } from './components/home/home.component';
import { BooksFormComponent } from './components/books-form/books-form.component';
import { BooksComponent } from './components/books/books.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'books', component: BooksComponent },
  { path: 'add', component: BooksFormComponent},
  { 
    path: 'edit/:id', component: BooksFormComponent,
    resolve: { book: bookResolver }
  }
];
