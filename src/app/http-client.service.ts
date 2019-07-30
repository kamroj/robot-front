import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from './app.component';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private listOfBookEndpoint =  serverUrl + '/books';
  private getBookEndpoint = serverUrl + '/bookUrl/';
  private start = serverUrl + '/start';
  private listOfBookPaginationEndpoint = serverUrl + '/books/pagination';


  constructor(private http: HttpClient) { }

  getListOfBooksPagination() : Observable<string> {
    return this.http.get(this.listOfBookPaginationEndpoint, { responseType: 'text' });
  }

  getListOfBooksPaginationNavigate(navigate) : Observable<string> {
    return this.http.get(this.listOfBookPaginationEndpoint + '/' + navigate, { responseType: 'text' });
  }

  getListOfBooksPaginationFilter(filter) : Observable<string> {
    return this.http.get(this.listOfBookPaginationEndpoint + '/filter?type=' + filter, { responseType: 'text' });
  }

  getListOfBooks(): Observable<string> {
    return this.http.get(this.listOfBookEndpoint, { responseType: 'text' });
  }

  getBook(url): Observable<string> {
    return this.http.get(this.getBookEndpoint + url, { responseType: 'text' });
  }

  startRobot(): Observable<string> {
    return this.http.get(this.start, { responseType: 'text' });
  }
}
