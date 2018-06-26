import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { baseUrl } from '../serviceUrl';

@Injectable()
export class MailService {
  baseUrl: string;
  constructor(public http: Http) {
    this.baseUrl = baseUrl;
    console.log(baseUrl);
  }
  getData(query: any): Observable<any> {
    const url = this.baseUrl + 'vc/mails';
    console.log(url);
    return this.http.post(url, query);
    /*let obj: any = {};
    this.http.request(url).subscribe((res: Response) => {
      obj = res.json();
      console.log(obj);
    }, (error: string) => {
      console.log(error);
    });*/
  }
  showDetails(no: number): Observable<any> {
    const url = this.baseUrl + 'vc/mail/' + no;
    return this.http.get(url);
  }
}
