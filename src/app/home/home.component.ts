import { HttpClientService } from '../http-client.service';
import { Book } from './book';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { TokenStorageService } from '../auth/token-storage.service';

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
  id: string;
  roles: string;

  constructor(private httpClientService: HttpClientService, private router: Router, private data: DataService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.startRobot();
    this.id = '';
    if (this.tokenStorage.getToken()) {
      this.tokenStorage.getAuthorities();
      this.roles = this.tokenStorage.getAuthorities()[0];
    }
  }

  start() {
    this.httpClientService.startRobot().subscribe();
  }

  startRobot() {
    this.httpClientService.getListOfBooksPagination().subscribe(
      data => {
        const list: Array<Book> = JSON.parse(data);
        for (const book of list) {
          this.listOfBooks.push(book);
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  redirectToBook(event: any) {
    this.id = event.target.id;
    this.data.changeMessage(this.id);
    this.router.navigateByUrl('book');
  }

  changeOrder(event: any) {
    if (this.sortedBy === event.target.abbr) {
      this.sortingType = !this.sortingType;
    }
    this.sortedBy = event.target.abbr;
  }
  checkboxBookstore(event: any) {
    const checkboxStatus = event.target.checked;

    if (checkboxStatus === true) {
      this.searchText = event.target.value;
      this.searchCategory = 'bookstore';
    } else {
      this.searchText = '';
      this.searchCategory = '';
    }
  }

  filterOption(event: any) {
    const filter = event.target.value;
    this.httpClientService.getListOfBooksPaginationFilter(filter).subscribe(
      data => {
        this.listOfBooks = [];
        const list: Array<Book> = JSON.parse(data);
        for (const book of list) {
          this.listOfBooks.push(book);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  paginationNavigation(event: any) {
    console.log(event);

    const navigate = event.target.attributes.value.value;

    this.httpClientService.getListOfBooksPaginationNavigate(navigate).subscribe(
      data => {
        this.listOfBooks = [];
        const list: Array<Book> = JSON.parse(data);
        for (const book of list) {
          this.listOfBooks.push(book);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  toLoginSite() {
    this.router.navigateByUrl('/auth/login');
  }
}
