import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { NotfoundPageComponent } from '../shared/errors/components/notfound-page/notfound-page.component'
import { RequestsPageComponent } from '../reservation-requests/components/requests-page/requests-page.component'
import { AddAccomComponent } from '../add-accom/add-accom.component'
import { LandingPageComponent } from '../accommodation/components/landing-page/landing-page.component';
import { ResultOverviewComponent } from '../accommodation/components/result-overview/result-overview.component';
import { AccommodationsOverviewComponent } from '../accommodation/components/host/accommodations-overview/accommodations-overview.component'

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'VIMA Booking',
  },
  {
    path: 'result-overview',
    component: ResultOverviewComponent
  },
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
  {
    path: 'accommodations-overview',
    component: AccommodationsOverviewComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MainAppRoutingModule { }
