import { Router } from '@angular/router';
import { HttpClientService } from './../http-client.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { DataService } from '../data.service';
import { SingleBook } from './singleBook';
import { Chart } from 'chart.js';
import { PriceHistory } from './priceHistory';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  chart: any;
  url: string;
  book: SingleBook;
  listpriceHistory: PriceHistory[];
  listOfDates = [];
  listOfRetailPrices = [];
  listOfPromotionalPrices = [];

  constructor(private data: DataService, private httpClient: HttpClientService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('url') === 'default message') {
      this.data.currentMessage.subscribe(message => {
          this.url = message;
          localStorage.setItem('url', this.url);
        }
      );
      this.getABook(this.url);
    } else {
      this.data.currentMessage.subscribe(message => this.url = message);
      this.getABook(localStorage.getItem('url'));
    }

  }

  getABook(url: string) {
    this.httpClient.getBook(localStorage.getItem('url')).subscribe(
      data => {
        console.log(data);
        this.book = JSON.parse(data);
        this.displayLastPrice(this.book);
        this.settingPricesToList();
        this.makeAChart();
      },
      error => {
        console.log(error);
      }
    );
  }

  settingPricesToList() {
    for (const pricehistory of this.listpriceHistory) {
      this.listOfDates.push(pricehistory.date);
      this.listOfRetailPrices.push(parseFloat(pricehistory.retailPrice));
      this.listOfPromotionalPrices.push(parseFloat(pricehistory.promotionalPrice));
    }
  }

  displayLastPrice(book: SingleBook) {
    this.listpriceHistory = this.book.priceHistory;
    const length = this.book.priceHistory.length;
    this.book.promotionalPrice = this.listpriceHistory[length - 1].promotionalPrice;
    this.book.price = this.listpriceHistory[length - 1].retailPrice;
  }

  makeAChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.listOfDates,
        datasets: [
          {
            data: this.listOfRetailPrices,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: this.listOfPromotionalPrices,
            borderColor: '#ffcc00',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }

          ]
        }
      }
    });
  }

  backToHome() {
    localStorage.setItem('url', 'default message');
    this.router.navigateByUrl('home');
  }

  ngOnDestroy(): void {
    localStorage.setItem('url', 'default message');
  }
}
