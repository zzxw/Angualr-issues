import { query } from './../query';
import { baseUrl } from './../serviceUrl';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TrendService {

  url: string;
  query: any;
  constructor(public http: Http) {
    this.query = {
      page: { currentPage: 1, size: 0 }, criteria: { project: '', daterange: [] }, order: { by: '', type: '' }
    };
  }
  getProjects(): Observable<any> {
    this.url = baseUrl + 'vc/projects';
    return this.http.get(this.url);
  }
  getTrendData(): Observable<any> {
    this.url = baseUrl + 'vc/count/days';
    return this.http.post(this.url, query);
  }

}
