import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebcamModule } from 'ngx-webcam';

import { FrNewsComponent } from './fr-news/fr-news.component';
import { FrReportComponent } from './fr-report/fr-report.component';
import { AFrReportsComponent } from './a-fr-reports/a-fr-reports.component';
import { AFrAccountsComponent } from './a-fr-accounts/a-fr-accounts.component';
import { AFrInfoComponent } from './a-fr-info/a-fr-info.component';
import { AFrEventsComponent } from './a-fr-events/a-fr-events.component';
import { FrEventsComponent } from './fr-events/fr-events.component';
import { FrProfileComponent } from './fr-profile/fr-profile.component';
import { FrLoginComponent } from './fr-login/fr-login.component';
import { ArNewsComponent } from './ar-news/ar-news.component';
import { ArReportComponent } from './ar-report/ar-report.component';
import { FrNewsAllComponent } from './fr-news-all/fr-news-all.component';
import { HomeComponent } from './home/home.component';
import { FrAccountComponent } from './fr-account/fr-account.component';
import { FrContactComponent } from './fr-contact/fr-contact.component';
import { FrInfoComponent } from './fr-info/fr-info.component';
import { AFrMessagesComponent } from './a-fr-messages/a-fr-messages.component';
import { AFrApprovedComponent } from './a-fr-approved/a-fr-approved.component';
import { AFrHomeComponent } from './a-fr-home/a-fr-home.component';
import { AFrAdminaccountsComponent } from './a-fr-adminaccounts/a-fr-adminaccounts.component';
import { FrConfComponent } from './fr-conf/fr-conf.component';

@NgModule({
  declarations: [
    AppComponent,

    FrNewsComponent,
    FrReportComponent,
    AFrReportsComponent,
    AFrAccountsComponent,
    AFrInfoComponent,
    AFrEventsComponent,
    FrEventsComponent,
    FrProfileComponent,
    FrLoginComponent,
    ArNewsComponent,
    ArReportComponent,
    FrNewsAllComponent,
    HomeComponent,
    FrAccountComponent,
    FrContactComponent,
    FrInfoComponent,
    AFrMessagesComponent,
    AFrApprovedComponent,
    AFrHomeComponent,
    AFrAdminaccountsComponent,
    FrConfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    WebcamModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
