import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FrNewsComponent } from './fr-news/fr-news.component';
import { FrNewsAllComponent } from './fr-news-all/fr-news-all.component';
import { FrReportComponent } from './fr-report/fr-report.component';
import { FrEventsComponent } from './fr-events/fr-events.component';
import { AFrReportsComponent } from './a-fr-reports/a-fr-reports.component';
import { AFrAccountsComponent } from './a-fr-accounts/a-fr-accounts.component';
import { AFrInfoComponent } from './a-fr-info/a-fr-info.component';
import { AFrEventsComponent } from './a-fr-events/a-fr-events.component';
import { ArNewsComponent } from './ar-news/ar-news.component';
import { ArReportComponent } from './ar-report/ar-report.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fr-news', component: FrNewsComponent },
  { path: 'fr-news-all', component: FrNewsAllComponent },
  { path: 'fr-report', component: FrReportComponent },
  { path: 'fr-events', component: FrEventsComponent },
  { path: 'a-fr-reports', component: AFrReportsComponent },
  { path: 'a-fr-accounts', component: AFrAccountsComponent },
  { path: 'a-fr-info', component: AFrInfoComponent },
  { path: 'a-fr-events', component: AFrEventsComponent },
  { path: 'ar-news', component: ArNewsComponent },
  { path: 'ar-report', component: ArReportComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
