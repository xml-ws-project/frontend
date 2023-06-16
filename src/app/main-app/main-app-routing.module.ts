import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { NotfoundPageComponent } from '../shared/errors/components/notfound-page/notfound-page.component'
import { RequestsPageComponent } from '../reservation-requests/components/requests-page/requests-page.component'
import { AddAccomComponent } from '../add-accom/add-accom.component'
import { LandingPageComponent } from '../accommodation/components/landing-page/landing-page.component'
import { ResultOverviewComponent } from '../accommodation/components/result-overview/result-overview.component'
import { AccommodationsOverviewComponent } from '../accommodation/components/host/accommodations-overview/accommodations-overview.component'
import { EditPageComponent } from '../auth/components/edit-page/edit-page/edit-page.component'
import { LoginGuard } from '../auth/guard/login.guard'
import { FlightsPageComponent } from '../flights/components/flights-page/flights-page.component'

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'VIMA Booking',
  },
  {
    path: 'result-overview',
    component: ResultOverviewComponent,
  },
  {
    path: '*',
    component: NotfoundPageComponent,
  },
  {
    path: 'requests',
    component: RequestsPageComponent,
    canActivate: [LoginGuard],
    title: 'VIMA Booking | Requests',
  },
  {
    path: 'add-accom',
    component: AddAccomComponent,
    canActivate: [LoginGuard],
    title: 'VIMA Booking | Add Accommodation',
  },
  {
    path: 'accommodations-overview',
    component: AccommodationsOverviewComponent,
    canActivate: [LoginGuard],
    title: 'VIMA Booking | Accommodation Overview',
  },
  {
    path: 'edit-profile',
    component: EditPageComponent,
    title: 'VIMA Booking | Edit profile',
  },
  {
    path: 'flight-search/:id',
    component: FlightsPageComponent,
    canActivate: [LoginGuard],
    title: 'VIMA Booking | Flight Search',
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAppRoutingModule {}
