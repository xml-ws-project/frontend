import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { AuthService } from 'src/app/auth/services/auth.service'
import { RatingService } from '../rating.service'
import { EditRate } from '../interface/EditRate'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.scss'],
})
export class RatingFormComponent implements OnInit {
  rate: number
  hostId: string
  selectedRate: any
  editRate: EditRate

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private service: RatingService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.selectedRate = params
      console.log(this.selectedRate)
    })
  }

  submitForm(newRate) {
    // Obrada podataka forme
    this.editRate = { id: this.selectedRate.rateId, newValue: newRate }
    console.log(this.selectedRate.id)
    this.service.edit(this.editRate).subscribe(
      (response) => {},
      (error: HttpErrorResponse) => {
        this.router.navigate([`host-ratings/${this.selectedRate.hostId}`])
      },
    )
  }

  cancelForm() {
    console.log(this.selectedRate.hostId)
    this.router.navigate(['host-ratings/', this.selectedRate.hostId])
  }
}
