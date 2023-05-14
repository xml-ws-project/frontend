import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MainAppRoutingModule } from './main-app-routing.module'
import { MainAppComponent } from './main-app.component'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { NavbarComponent } from '../navbar/navbar.component'
import { AccommodationModule } from '../accommodation/accommodation.module';
import { ReservationRequestsModule } from '../reservation-requests/reservation-requests.module'
import { RequestService } from '../reservation-requests/services/request.service'

@NgModule({
  declarations: [MainAppComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainAppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatAutocompleteModule,
    AccommodationModule,
    ReservationRequestsModule,
  ],
  exports: [MatMenuModule],
  providers: [RequestService],
})
export class MainAppModule { }
