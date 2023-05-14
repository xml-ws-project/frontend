import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAccommodationDialogComponent } from '../update-accommodation-dialog/update-accommodation-dialog.component';
import { CreateSpecialPeriodDialogComponent } from '../create-special-period-dialog/create-special-period-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { AccommdationService } from 'src/app/accommodation/service/accommdation.service';
import { AccommodationResponse } from 'src/app/accommodation/interface/AccommodationResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-accommodations-overview',
  templateUrl: './accommodations-overview.component.html',
  styleUrls: ['./accommodations-overview.component.scss']
})
export class AccommodationsOverviewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'country', 'city', 'street', 'number', 'postalCode', 'maxGuests', 'minGuests', 'paymentType', 'regularPrice'];
  selectedAccommodationId: string;
  dataSource = [];

  constructor(public dialog: MatDialog, private toastrService: ToastrService, private accommodationService: AccommdationService) { }

  ngOnInit(): void {
    this.accommodationService.findAllByHostId('').subscribe(
      (response: AccommodationResponse[]) => {
        this.dataSource = response;
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

  openUpdateAccommodation(enterAnimDuration: string, exitAnimDuration: string): void {
    this.dialog.open(UpdateAccommodationDialogComponent, {
      width: '55rem',
      height: '35rem',
      data: { accommodationId: this.selectedAccommodationId }
    });
  }

  openCreateSpecialPeriod(enterAnimDuration: string, exitAnimDuration: string): void {
    this.dialog.open(CreateSpecialPeriodDialogComponent, {
      width: '60rem',
      height: '45rem',
      data: { accommodationId: this.selectedAccommodationId }
    });
  }

  getRow(row: any) {
    this.selectedAccommodationId = row.id;
  }

}
