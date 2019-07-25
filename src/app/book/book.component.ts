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


  chart : any;
  url: string;
  book: SingleBook;
  priceHistory: PriceHistory;

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
        this.priceHistory = this.book.priceHistory[0];
        let datas = this.priceHistory.retailPrice;
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: ['0', '1', '2'],
            datasets: [
              {
                data: [1, 2, 2],
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: [4, 5, 6],
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
