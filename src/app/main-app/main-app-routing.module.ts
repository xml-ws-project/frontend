import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { NotfoundPageComponent } from '../shared/errors/components/notfound-page/notfound-page.component'
import { RequestsPageComponent } from '../reservation-requests/components/requests-page/requests-page.component'

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
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAppRoutingModule {}
