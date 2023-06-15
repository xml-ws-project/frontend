import { Component, OnInit, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
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

  constructor(private service: RequestService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      departure: new FormControl('', Validators.required),
      landing: new FormControl('', Validators.required),
      numOfSeats: new FormControl(null, Validators.required),
    })
  }

  onFormSubmit() {
    const dto = {
      start: this.start,
      end: this.end,
      departure: this.form.value.departure,
      landing: this.form.value.landing,
      numOfSeats: this.form.value.numOfSeats,
    }
  }
}
