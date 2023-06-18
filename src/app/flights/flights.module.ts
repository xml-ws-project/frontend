import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlightsPageComponent } from './components/flights-page/flights-page.component'
import { FlightsSearchComponent } from './components/flights-search/flights-search.component'
import { MatButtonModule } from '@angular/material/button'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { FlightCardComponent } from './components/flight-card/flight-card.component'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component'

@NgModule({
  declarations: [FlightsPageComponent, FlightsSearchComponent, FlightCardComponent, DialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
  ],
})
export class FlightsModule {}
