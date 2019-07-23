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
  sortedBy: string;
  sortingType = false;
  listOfBooks = [];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.startRobot();
  }

  startRobot() {
    this.httpClientService.getListOfBooks().subscribe(
      data => {
        const list: Array<Book> = JSON.parse(data);
        console.log(list);

        for(const book of list) {

          book.price = book.price.replace('zł','');
          this.listOfBooks.push(book);
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  changeOrder(event: any) {
    if (this.sortedBy === event.target.abbr){
     this.sortingType = !this.sortingType;
    }
    this.sortedBy = event.target.abbr;
  }
  checkboxBookstore(event: any) {

    console.log(event);

    const checkboxStatus = event.target.checked;

    if (checkboxStatus === true) {
      this.searchText = event.target.value;
      this.searchCategory = 'bookstore';
    } else {
      this.searchText = '';
      this.searchCategory = '';
    }

  }
}
