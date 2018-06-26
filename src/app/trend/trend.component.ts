import { TrendService } from './trend.service';
import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {ECharts} from 'echarts';
import * as echarts from 'echarts';
// import { ECharts } from 'echarts/lib/echarts';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {
  service: TrendService;
  // echarts: ECharts;
  projects: Array<string>;
  xList: Array<number>;
  yList: Array<number>;
  constructor(public http: Http) {
    this.service = new TrendService(this.http);
  }

  ngOnInit() {
    this.getTrend();
  }
  initGraph() {
    const myChart = echarts.init(document.getElementById('graph') as any);
    const option = {
      title: {
        text: '一线报告问题',
        textStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          color: '#333333'
        }
      },
      legend: {
        data: ['一线报告问题']
      },
      tooltip: {
        show: true
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {
            show: true
          },
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
        }
      },
      dataZoom: {
        show: true,
        realtime: true,
        start: 0,
        end: 100
      },
      xAxis: {
        data: this.xList,
        axisLabel: {
          interval: 0,
          rotate: 60
        }
      },
      yAxis: {},
      series: {
        name: '一线报告问题',
        type: 'line',
        smooth: true,
        data: this.yList,
        areaStyle: {}
      }
    };
    myChart.setOption(option as any);
    window.onresize = myChart.resize;
  }
  getTrend() {
    const project = this.service.getProjects();
    project.subscribe((res: Response) => {
      const responseData = res.json();
      console.log(responseData);
      if (responseData['success']) {
        console.log(responseData);
        this.projects = responseData['records'];
        console.log(this.projects);
      }
    }, (err: string) => {
      console.log(err);
    });
    const response = this.service.getTrendData();
    response.subscribe((res: Response) => {
      const responseData = res.json();
      console.log(responseData);
      if (responseData['success']) {
        console.log(responseData);
        const records = responseData['records'];
        this.xList = records.map(item => item.values[0]);
        this.yList = records.map(item => item.values[1]);
        console.log(this.xList);
        console.log(this.yList);
      }
      this.initGraph();
    }, (err: string) => {
      console.log(err);
    });
  }
}
