import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../../interface/SearchResponse';
import { MatTableDataSource } from '@angular/material/table';
import { AccommdationService } from '../../service/accommdation.service';
import { AccommodationResponse } from '../../interface/AccommodationResponse';
import { PaymentType } from '../../enum/PaymentType.enum';

@Component({
  selector: 'app-result-overview',
  templateUrl: './result-overview.component.html',
  styleUrls: ['./result-overview.component.scss']
})
export class ResultOverviewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'country', 'city', 'unitPrice', 'totalPrice'];
  dataSource = new MatTableDataSource<SearchResponse>();
  panelOpenState = false;
  selectedAccommodation: AccommodationResponse;

  constructor(private accommodationService: AccommdationService) { }

  ngOnInit(): void {
    this.accommodationService.desiredAccommodations.subscribe((x) => {
      this.dataSource = x.responseList;
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
      regularPrice: 0
    }
  }

  getRow(row: any) {
    this.selectedAccommodation = {
      id: row.id,
      name: row.name,
      hostId: row.hostId,
      country: row.country,
      city: row.city,
      street: row.street,
      number: row.number,
      postalCode: row.postalCode,
      benefits: row.benefits,
      images: row.images,
      minGuests: row.minGuests,
      maxGuests: row.maxGuests,
      paymentType: row.paymentType,
      automaticAcceptance: row.automaticAcceptance,
      regularPrice: row.regularPrice
    }
  }

  reserve() {
    //odraditi rezervaciju ukoliko je korisnik ulogovan
  }

}
