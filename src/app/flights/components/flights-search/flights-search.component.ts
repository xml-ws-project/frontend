import { Component, OnInit, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { RequestService } from 'src/app/reservation-requests/services/request.service'

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss'],
})
export class FlightsSearchComponent implements OnInit {
  @Input() start = ''
  @Input() end = ''

  public form: FormGroup
  public showCards: boolean = false

  constructor(private service: RequestService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      departure: new FormControl('', Validators.required),
      landing: new FormControl('', Validators.required),
      numberOfSeats: new FormControl(null, Validators.required),
    })
  }

  onFormSubmit() {
    const dto = {
      start: '2023-04-04',
      end: '2023-04-06',
      departurePlace: this.form.value.departure,
      landingPlace: this.form.value.landing,
      numberOfSeats: this.form.value.numberOfSeats,
    }

    this.service.findFlightsForReservation(dto).subscribe((response) => {
      console.log(response)
      if (response.length === 0) {
        this.toastr.info('There are no available flights for your reservation.')
        this.showCards = false
        return
      }
      this.showCards = true
    })
  }
}
