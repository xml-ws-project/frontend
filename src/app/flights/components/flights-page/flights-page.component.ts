import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ReservationRequest } from 'src/app/accommodation/interface/ReservationRequest'
import { ReservationResponse } from 'src/app/accommodation/interface/ReservationResponse'
import { RequestService } from 'src/app/reservation-requests/services/request.service'

@Component({
  selector: 'app-flights-page',
  templateUrl: './flights-page.component.html',
  styleUrls: ['./flights-page.component.scss'],
})
export class FlightsPageComponent implements OnInit {
  public reservation: any = {}
  constructor(private route: ActivatedRoute, private service: RequestService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe((response) => {
      this.reservation = response
    })
  }
}
