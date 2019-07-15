import { HttpClientService } from './http-client.service';
import { Book } from './book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText: string;
  searchCategory: string;
  listOfBooks = [];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  startRobot() {
    this.httpClientService.getListOfBooks().subscribe(
      data => {
        const list: Array<Book> = JSON.parse(data);
        console.log(list);

        for(const book of list) {
           this.listOfBooks.push(book);
        }
      },
      error => {
        console.log(JSON.parse(error));
      }
    );
  }
}
