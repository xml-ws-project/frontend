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

@NgModule({
  declarations: [FlightsPageComponent, FlightsSearchComponent],
  imports: [CommonModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule],
})
export class FlightsModule {}
