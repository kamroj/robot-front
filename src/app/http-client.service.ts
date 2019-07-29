import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private listOfBookEndpoint =  'http://localhost:8085/books';
  private getBookEndpoint = 'http://localhost:8085/bookUrl/';
  private start = 'http://localhost:8085/start';


  constructor(private http: HttpClient) { }

  getListOfBooks(): Observable<string> {
    return this.http.get(this.listOfBookEndpoint, { responseType: 'text' });
  }

  getBook(url): Observable<string> {
    return this.http.get(this.getBookEndpoint+url, { responseType: 'text' });
  }

  startRobot(): Observable<string> {
    return this.http.get(this.start, { responseType: 'text' });
  }
}
