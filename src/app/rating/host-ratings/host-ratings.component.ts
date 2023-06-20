import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Route, Router } from '@angular/router'
import { RatingService } from '../rating.service'
import { HostRatingResponse } from '../interface/HostRatingResponse'
import { AuthService } from 'src/app/auth/services/auth.service'
import { AvgRateResponse } from '../interface/AvgRateResponse'

@Component({
  selector: 'app-host-ratings',
  templateUrl: './host-ratings.component.html',
  styleUrls: ['./host-ratings.component.scss'],
})
export class HostRatingsComponent implements OnInit {
  constructor(private authService: AuthService, private route: ActivatedRoute, private service: RatingService, private router: Router) {}
  rates: HostRatingResponse[]
  guestId: string
  avgRate: AvgRateResponse = {
    avgRate: 0,
    firstName: '',
    lastName: '',
  }
  editRate: any = {
    rateId: 0,
    firstName: '',
    lastName: '',
    hostId: 0,
  }
  hostId: string

  ngOnInit(): void {
    this.hostId = this.route.snapshot.paramMap.get('id')
    this.service.findAllByHostId(this.hostId).subscribe((response) => {
      this.rates = response
      console.log(this.rates)
    })

    this.service.getAvgRate(this.hostId).subscribe((response) => {
      this.avgRate = response
    })

    if (this.authService.isLogged()) {
      this.authService.user.subscribe((user) => {
        this.guestId = user.id
      })
    }
  }

  delete(id) {
    console.log(id)
    this.service.delete(id).subscribe((response) => {
      console.log(response)
    })
  }
  edit(firstName, lastName, id) {
    this.editRate = { rateId: id, firstName: firstName, lastName: lastName, hostId: this.hostId }
    this.router.navigate(['rate-host'], { queryParams: this.editRate })
  }
}
