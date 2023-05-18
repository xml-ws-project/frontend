import { AuthService } from './../auth/services/auth.service';
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm, Validators } from '@angular/forms'
import { FormControl, FormGroup } from '@angular/forms'
import { AccommdationService } from '../accommodation/service/accommdation.service'
import { PaymentType } from '../accommodation/enum/PaymentType.enum'
import { AdditionalBenefitResponse } from '../accommodation/interface/AdditionalBenefitResponse'
import { HttpErrorResponse } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr'
import { AccommodationRequest } from '../accommodation/interface/AccommodationRequest'
import { AccommodationResponse } from '../accommodation/interface/AccommodationResponse'

@Component({
  selector: 'app-add-accom',
  templateUrl: './add-accom.component.html',
  styleUrls: ['./add-accom.component.scss'],
})
export class AddAccomComponent implements OnInit {
  public form: FormGroup
  paymentTypes: PaymentType[];
  benefits: AdditionalBenefitResponse[];
  benefitsIds = new FormControl<string[] | null>(null, Validators.required);
  paymentType = new FormControl<PaymentType | null>(null, Validators.required);
  accommodationRequest: AccommodationRequest;
  hostId: string;

  constructor(private router: Router,
    private accommodationService: AccommdationService,
    private toastrService: ToastrService,
    private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.authService.user.subscribe((user) => {
        this.hostId = user.id;
      })
    }
    this.accommodationService.findAllBenefits().subscribe(
      (response: AdditionalBenefitResponse[]) => {
        this.benefits = response;
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );;
    this.paymentTypes = Object.values(PaymentType);
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
      paymentType: this.paymentType,
      benefitsIds: this.benefitsIds,
      automaticAcceptance: new FormControl(null, Validators.required),
      start: new FormControl(0, Validators.required),
      end: new FormControl(0, Validators.required),
    })
  }

  onFormSubmit() {
    this.accommodationRequest = {
      name: this.form.value.name,
      hostId: this.hostId,
      country: this.form.value.country,
      city: this.form.value.city,
      street: this.form.value.street,
      number: this.form.value.number,
      postalCode: this.form.value.postalCode,
      images: [],
      minGuests: this.form.value.minGuests,
      maxGuests: this.form.value.maxGuests,
      paymentType: this.form.value.paymentType,
      automaticAcceptance: this.form.value.automaticAcceptance,
      regularPrice: this.form.value.regularPrice,
      benefitsIds: this.form.value.benefitsIds,
      start: this.form.value.start,
      end: this.form.value.end
    }
    console.log(this.accommodationRequest)
    this.accommodationService.create(this.accommodationRequest).subscribe(
      (response: AccommodationResponse) => {
        this.toastrService.success("Accommodation is successfully created.")
        this.router.navigate(['/'])
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }
}
