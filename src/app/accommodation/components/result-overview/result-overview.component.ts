import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { SearchResponse } from '../../interface/SearchResponse'
import { MatTableDataSource } from '@angular/material/table'
import { AccommdationService } from '../../service/accommdation.service'
import { AccommodationResponse } from '../../interface/AccommodationResponse'
import { PaymentType } from '../../enum/PaymentType.enum'
import { AuthService } from 'src/app/auth/services/auth.service'
import { RequestService } from 'src/app/reservation-requests/services/request.service'
import { ReservationRequest } from '../../interface/ReservationRequest'
import { Subscription } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr'
import { ReservationResponse } from '../../interface/ReservationResponse'
import { FilterRequest } from '../../interface/FilterRequest'

@Component({
  selector: 'app-result-overview',
  templateUrl: './result-overview.component.html',
  styleUrls: ['./result-overview.component.scss'],
})
export class ResultOverviewComponent implements OnInit {
  displayedColumns: string[] = ['name', 'country', 'city', 'unitPrice', 'totalPrice']
  dataSource = new MatTableDataSource<SearchResponse>()
  panelOpenState = false
  selectedAccommodation: AccommodationResponse
  reservationRequest: ReservationRequest
  desiredStart: string
  desiredEnd: string
  desiredGuests: number
  filterRequest: FilterRequest
  benefitTemp: string = ''
  hostTemp: string = ''
  initialData = new MatTableDataSource<SearchResponse>()

  private userSub: Subscription | undefined
  userId: string

  constructor(
    private accommodationService: AccommdationService,
    private authService: AuthService,
    private router: Router,
    private reservationService: RequestService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.accommodationService.desiredAccommodations.subscribe((x) => {
      this.dataSource = x.responseList
      this.desiredStart = x.start
      this.desiredEnd = x.end
      this.desiredGuests = x.numOfGuests
    })
    this.selectedAccommodation = {
      id: '',
      name: '',
      hostId: '',
      country: '',
      city: '',
      street: '',
      number: '',
      postalCode: '',
      benefits: [],
      images: null as any,
      minGuests: 0,
      maxGuests: 0,
      paymentType: PaymentType.NONE,
      automaticAcceptance: false,
      regularPrice: 0,
    }
    if (this.authService.isLogged()) {
      this.userSub = this.authService.user.subscribe((user) => {
        this.userId = user.id
      })
    }
    this.filterRequest = {
      minPrice: 0,
      maxPrice: 5000,
      hostName: '',
      benefits: [],
    }
    this.initialData = this.dataSource
  }

  getRow(row: any) {
    this.selectedAccommodation = {
      id: row.accommodation.id,
      name: row.accommodation.name,
      hostId: row.accommodation.hostId,
      country: row.accommodation.country,
      city: row.accommodation.city,
      street: row.accommodation.street,
      number: row.accommodation.number,
      postalCode: row.accommodation.postalCode,
      benefits: row.accommodation.benefits,
      images: row.accommodation.images,
      minGuests: row.accommodation.minGuests,
      maxGuests: row.accommodation.maxGuests,
      paymentType: row.accommodation.paymentType,
      automaticAcceptance: row.accommodation.automaticAcceptance,
      regularPrice: row.accommodation.regularPrice,
    }
  }

  reserve() {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/login'])
      return
    }
    this.reservationRequest = {
      numOfGuests: this.desiredGuests,
      start: this.desiredStart,
      end: this.desiredEnd,
      accomId: this.selectedAccommodation.id,
      userId: this.userId,
    }
    this.reservationService.create(this.reservationRequest).subscribe(
      (response: ReservationResponse) => {
        this.toastrService.success('Your reservation is successfully passed to host.')
        this.router.navigate(['/'])
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message)
      },
    )
  }

  addBenefit() {
    if (this.benefitTemp.trim() != '') {
      this.filterRequest.benefits.push(this.benefitTemp.trim())
    }

    this.benefitTemp = ''
  }

  async filterAccommodations() {
    if (this.hostTemp.trim() != '') {
      this.filterRequest.hostName = await this.authService.getHostIdByUsername(this.hostTemp).toPromise()
    }
    this.accommodationService.filterAccommodations(this.filterRequest).subscribe((response: SearchResponse[]) => {
      this.dataSource = new MatTableDataSource<SearchResponse>(response)
    })
  }

  restart() {
    this.filterRequest.benefits = []
    this.filterRequest.maxPrice = 5000
    this.filterRequest.minPrice = 0
    this.hostTemp = ''
    this.benefitTemp = ''
    this.dataSource = this.initialData
  }
}
