import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FrNewsComponent } from './fr-news/fr-news.component';
import { FrReportComponent } from './fr-report/fr-report.component';
import { FrEventsComponent } from './fr-events/fr-events.component';
import { FrInfoComponent } from './fr-info/fr-info.component';
import { FrAccountComponent } from './fr-account/fr-account.component';
import { FrContactComponent } from './fr-contact/fr-contact.component';
import { FrConfComponent } from './fr-conf/fr-conf.component';
import { AFrHomeComponent } from './a-fr-home/a-fr-home.component';
import { AFrReportsComponent } from './a-fr-reports/a-fr-reports.component';
import { AFrApprovedComponent } from './a-fr-approved/a-fr-approved.component';
import { AFrAccountsComponent } from './a-fr-accounts/a-fr-accounts.component';
import { AFrInfoComponent } from './a-fr-info/a-fr-info.component';
import { AFrEventsComponent } from './a-fr-events/a-fr-events.component';
import { AFrMessagesComponent } from './a-fr-messages/a-fr-messages.component';
import { AFrAdminaccountsComponent } from './a-fr-adminaccounts/a-fr-adminaccounts.component';
import { ArNewsComponent } from './ar-news/ar-news.component';
import { ArReportComponent } from './ar-report/ar-report.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fr-problems', component: FrNewsComponent },
  { path: 'fr-report', component: FrReportComponent },
  { path: 'fr-events', component: FrEventsComponent },
  { path: 'fr-info', component: FrInfoComponent },
  { path: 'fr-account', component: FrAccountComponent },
  { path: 'fr-contact', component: FrContactComponent },
  { path: 'fr-conf', component: FrConfComponent },
  { path: 'a-fr-home', component: AFrHomeComponent },
  { path: 'a-fr-reports', component: AFrReportsComponent },
  { path: 'a-fr-approved', component: AFrApprovedComponent },
  { path: 'a-fr-accounts', component: AFrAccountsComponent },
  { path: 'a-fr-info', component: AFrInfoComponent },
  { path: 'a-fr-events', component: AFrEventsComponent },
  { path: 'a-fr-messages', component: AFrMessagesComponent },
  { path: 'a-fr-adminaccounts', component: AFrAdminaccountsComponent },
  { path: 'ar-news', component: ArNewsComponent },
  { path: 'ar-report', component: ArReportComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
