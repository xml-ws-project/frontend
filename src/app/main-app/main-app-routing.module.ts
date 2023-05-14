<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { NotfoundPageComponent } from '../shared/errors/components/notfound-page/notfound-page.component'
import { RequestsPageComponent } from '../reservation-requests/components/requests-page/requests-page.component'
import { AddAccomComponent } from '../add-accom/add-accom.component'

const routes: Routes = [
  // {
  //   path: '',
  //   component: LandingPageComponent,
  //   title: 'VIMA Airlines',
  // },
  {
    path: '*',
    component: NotfoundPageComponent,
  },
  {
    path: 'requests',
    component: RequestsPageComponent,
  },
  {
    path: 'add-accom',
    component: AddAccomComponent,
    title: 'VIMA Booking | Add Accommodation',
  },
  // {
=======
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from '../accommodation/components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'VIMA Booking',
  },
  // {
  //   path: '*',
  //   component: NotfoundPageComponent,
  // },
  // {
  //   path: 'search-result',
  //   component: MainSearchResComponent,
  // },
  // {
  //   path: 'create-flight',
  //   component: CreateFlightPageComponent,
  //   title: 'VIMA Airlines | Create Flight',
  // },
  // {
>>>>>>> 8c243738a481e2e49d300894e7e623357ff4f11e
  //   path: 'show-flight/:id',
  //   component: ShowFlightPageComponent,
  //   title: 'VIMA Airlines | Flight',
  // },
  // {
  //   path: 'ticket',
  //   component: TicketCardComponent,
  // },
  // {
  //   path: 'user/tickets',
  //   component: TicketOverviewComponent,
  // },
  // {
  //   path: 'search-result',
  //   component: MainSearchResComponent,
  // },
<<<<<<< HEAD
]
=======
];
>>>>>>> 8c243738a481e2e49d300894e7e623357ff4f11e

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class MainAppRoutingModule {}
=======
export class MainAppRoutingModule { }
>>>>>>> 8c243738a481e2e49d300894e7e623357ff4f11e
