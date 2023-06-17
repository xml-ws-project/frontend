import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedPageComponent } from './components/recommended-page/recommended-page.component';
import { RecommendCardComponent } from './components/recommend-card/recommend-card.component';



@NgModule({
  declarations: [
    RecommendedPageComponent,
    RecommendCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecommendedModule { }
