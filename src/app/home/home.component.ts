import { Book } from './book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfBooks = [];
  constructor() { }

  ngOnInit() {
  }

  startRobot() {
    const book = new Book('Pan Tadeusz ', 'Ostatni zjazd na Litwie', 'Mickiewicz', '12,00');
    this.listOfBooks.push(book);
  }

}
