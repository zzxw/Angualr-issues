import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { VersionService } from './version-service.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  service: VersionService;
  versions: any;
  list: Array<string>;
  data: Array<string>;
  constructor(public http: Http) {
    this.service = new VersionService(this.http);
  }

  ngOnInit() {
    this.init();
  }
  init(): void {
    const responseData = this.service.getVersions();
    console.log(responseData);
    responseData.subscribe((res: Response) => {
      const item = res.json();
      this.versions = item.records;
      console.log(this.versions);
    }, (error: string) => {
      console.log(error);
    });
  }
  showList(version: string) {
    console.log(version);
    const response = this.service.showList(version);
    response.subscribe((res: Response) => {
      const responseData = res.json();
      if (responseData.success) {
        const records = responseData.records;
        this.data = records;
      }
    }, (err: string) => {
      console.log(err);
    });
    const issueResponse = this.service.getData(version);
    issueResponse.subscribe((res: Response) => {
      const responseData = res.json();
      if (responseData.success) {
        const records = responseData.records;
        this.list = records;
      }
    }, (err: string) => {
      console.log(err);
    });
  }
}
