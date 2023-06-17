import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RecommendedPageComponent } from './components/recommended-page/recommended-page.component'
import { RecommendCardComponent } from './components/recommend-card/recommend-card.component'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
@NgModule({
  declarations: [RecommendedPageComponent, RecommendCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class RecommendedModule {}
