import { Component } from '@angular/core';
import {Book} from "../../shared/modelo/book";
import {BOOKS} from "../../shared/modelo/BOOKS";

@Component({
  selector: 'app-mantem-book',
  templateUrl: './mantem-book.component.html',
  styleUrls: ['./mantem-book.component.css']
})
export class MantemBookComponent {
  books: Book[] = BOOKS;
  bookToRegister: Book = new Book("", "", "");

  insertBook(): void {
      this.books.push(this.bookToRegister);
      this.bookToRegister = new Book("", "", "");
  }

}
