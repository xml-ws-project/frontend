import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { ResultOverviewComponent } from './components/result-overview/result-overview.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    LandingPageComponent,
    InfoCardComponent,
    SearchComponent,
    ResultOverviewComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatTableModule
  ]
})
export class AccommodationModule { }
