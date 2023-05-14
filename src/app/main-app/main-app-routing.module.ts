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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAppRoutingModule { }
