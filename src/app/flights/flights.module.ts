import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsPageComponent } from './components/flights-page/flights-page.component';
import { FlightsSearchComponent } from './components/flights-search/flights-search.component';



@NgModule({
  declarations: [
    FlightsPageComponent,
    FlightsSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlightsModule { }
