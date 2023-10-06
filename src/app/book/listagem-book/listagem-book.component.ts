import { Component } from '@angular/core';
import {Book} from "../../shared/modelo/book";
import {BOOKS} from "../../shared/modelo/BOOKS";

@Component({
  selector: 'app-listagem-book',
  templateUrl: './listagem-book.component.html',
  styleUrls: ['./listagem-book.component.css']
})
export class ListagemBookComponent {
  books : Array<Book> = BOOKS;
  deleteBook(bookToDelete : Book) : void {
    const index = this.books.findIndex(book => book == bookToDelete);
    this.books.splice(index, 1);
  }
}
