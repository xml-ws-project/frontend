import { Component, Input, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth/services/auth.service'

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent implements OnInit {
  @Input() flight
  @Input() numOfTickets

  class: string = 'ECONOMY'
  userId: string = ''

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.userId = user.id
    })
  }

  onBuy() {
    const dto = {
      seatNumbers: [],
      userId: this.userId,
      flightId: this.flight.id,
      additionalLuggage: false,
      passengerClass: this.class,
      numberOfTickets: this.numOfTickets,
    }

    console.log(dto)
  }
}
