import { Component, Input, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth/services/auth.service'
import { FlightService } from '../../services/flight.service'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component'

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
  key: string = ''
  keyValid: boolean = false

  constructor(
    private authService: AuthService,
    private flightService: FlightService,
    private toastr: ToastrService,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.userId = user.id
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.key,
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.key = result
      this.flightService.validateApiKey(this.key).subscribe((result) => {
        this.keyValid = result
        if (!this.keyValid) {
          this.toastr.error('API key invalid.')
          return
        }

        this.onBuy()
      })
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
