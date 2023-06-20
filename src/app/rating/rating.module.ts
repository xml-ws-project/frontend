import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HostRatingsComponent } from './host-ratings/host-ratings.component'
import { MatCardModule } from '@angular/material/card'
import { RatingFormComponent } from './rating-form/rating-form.component'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [HostRatingsComponent, RatingFormComponent],
  imports: [CommonModule, MatCardModule, FormsModule],
})
export class RatingModule {}
