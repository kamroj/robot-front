import { HttpClientService } from './http-client.service';
import { Book } from './book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfBooks = [];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  startRobot() {
    this.httpClientService.getListOfBooks().subscribe(
      data => {
        console.log('siema');
        console.log(data);
      },
      error => {
        console.log(JSON.parse(error));
      }
    );
    const book = new Book('Pan Tadeusz ', 'Ostatni zjazd na Litwie', 'Mickiewicz', '12,00');
    this.listOfBooks.push(book);
  }

}
