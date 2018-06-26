import { query } from './../query';
import { baseUrl } from './../serviceUrl';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StatisticsServiceService {
  url: string;
  query: any;
  constructor(public http: Http) {
    this.query = {
       page: { currentPage: 1, size: 0 }, criteria: { project: '', daterange: [] }, order: { by: '', type: '' }
    };
  }
  getData(): Observable<any> {
    this.url = baseUrl + 'vc/count/projects';
    return this.http.post(this.url, query);
  }
}
