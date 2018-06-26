import { baseUrl } from './../serviceUrl';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class IssuesService {
  url: string;
  constructor(public http: Http) { }
  init(query: any): Observable<any> {
    this.url = baseUrl + 'vc/search';
    return this.http.post(this.url, query);
  }
  getDetails(no: string): Observable<any> {
    this.url = baseUrl + 'vc/issue/' + no;
    return this.http.get(this.url);
  }
  getDocs(no: string): Observable<any> {
    this.url = baseUrl + 'vc/docs/' + no;
    return this.http.get(this.url);
  }
}
