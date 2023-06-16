import { Component, Input, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth/services/auth.service'
import { FlightService } from '../../services/flight.service'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent implements OnInit {
  @Input() flight
  @Input() numOfTickets

  class: number = 0
  userId: string = ''

  constructor(private authService: AuthService, private flightService: FlightService, private toastr: ToastrService, private router: Router) {}

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

    this.flightService.buyTicket(dto).subscribe((response) => {
      if (!response) {
        this.toastr.error('Something went wrong...')
        return
      }

      this.toastr.success('Ticket purchase successful!')
      this.router.navigate([''])
    })
  }
}
