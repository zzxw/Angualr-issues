import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Version } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopeBarComponent } from './tope-bar/tope-bar.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { CodeIssuesComponent } from './code-issues/code-issues.component';
import { IssuesComponent } from './issues/issues.component';
import { VersionComponent } from './version/version.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { TrendComponent } from './trend/trend.component';
import { TypesComponent } from './types/types.component';
import { IssuesTabComponent } from './issues-tab/issues-tab.component';
// import { ServiceUrl } from './serviceUrl';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopeBarComponent,
    MailListComponent,
    CodeIssuesComponent,
    IssuesComponent,
    VersionComponent,
    StatisticsComponent,
    HelpComponent,
    TrendComponent,
    TypesComponent,
    IssuesTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'issue-mail',
        component: MailListComponent
      },
      {
        path: 'issue-category',
        component: CodeIssuesComponent
      },
      {
        path: 'issue-trace',
        component: IssuesComponent
      },
      {
        path: 'issue-version',
        component: VersionComponent
      },
      {
        path: 'count-trend',
        component: TrendComponent
      },
      {
        path: 'count-projects',
        component: StatisticsComponent
      },
      {
        path: 'count-types',
        component: TypesComponent
      },
      {
        path: 'issue-help',
        component: HelpComponent
      }
    ])
  ],
  providers: [
     // {provide: 'serviceUrl', useFactory: (http: Http): ServiceUrl => new ServiceUrl(http), deps: [Http]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
