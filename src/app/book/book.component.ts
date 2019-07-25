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
export class BookComponent implements OnInit {


  chart: any;
  url: string;
  book: SingleBook;
  listpriceHistory: PriceHistory[];
  listOfDates = [];
  listOfRetailPrices = [];
  listOfPromotionalPrices = [];

  constructor(private data: DataService, private httpClient: HttpClientService, private router: Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.url = message);
    if (this.url === 'default message') {
      this.router.navigateByUrl('home');
    }
    this.httpClient.getBook(this.url).subscribe(
      data => {
        console.log(data);
        this.book = JSON.parse(data);
        this.listpriceHistory = this.book.priceHistory;

        for(let pricehistory of this.listpriceHistory) {

          this.listOfDates.push(pricehistory.date);
          this.listOfRetailPrices.push(parseFloat(pricehistory.retailPrice));
          this.listOfPromotionalPrices.push(parseFloat(pricehistory.promotionalPrice));


        }

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
      },
      error => {
        console.log(error);
      }
    );
  }

}
