import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth/services/auth.service'
import { RecommendService } from '../../services/recommend.service'

@Component({
  selector: 'app-recommended-page',
  templateUrl: './recommended-page.component.html',
  styleUrls: ['./recommended-page.component.scss'],
})
export class RecommendedPageComponent implements OnInit {
  public userId = ''
  public recommended = []

  constructor(private authService: AuthService, private recommendService: RecommendService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.userId = user.id
    })

    this.recommendService.recommend(this.userId).subscribe((response) => {
      console.log(response)
      this.recommended = response
    })
  }
}
