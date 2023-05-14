import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm, Validators } from '@angular/forms'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-add-accom',
  templateUrl: './add-accom.component.html',
  styleUrls: ['./add-accom.component.scss'],
})
export class AddAccomComponent implements OnInit {
  public form: FormGroup

  constructor(private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(undefined, Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl(undefined, Validators.required),
      street: new FormControl(undefined, Validators.required),
      number: new FormControl('', Validators.required),
      postalCode: new FormControl('', [Validators.required]),
      minGuests: new FormControl(0, Validators.required),
      maxGuests: new FormControl(0, Validators.required),
      regularPrice: new FormControl(0, Validators.required),
      paymentType: new FormControl<PaymetType | null>(null, Validators.required),
      benefitsIds: new FormControl<Benefit[] | null>(null, Validators.required),
      automaticAcceptance: new FormControl(null, Validators.required),
      start: new FormControl(0, Validators.required),
      end: new FormControl(0, Validators.required),
    })
  }

  onFormSubmit() {
    console.log(this.form.value)
  }

  paymentTypes: PaymetType[] = [
    { name: 'Overall', value: 'OVERALL' },
    { name: 'Per guest', value: 'PER_GUEST' },
  ]

  benefits: Benefit[] = [
    { name: 'WiFi', value: '1' },
    { name: 'Parking', value: '2' },
    { name: 'Kitchen', value: '3' },
  ]
}

interface PaymetType {
  name: string
  value: string
}

interface Benefit {
  name: string
  value: string
}
