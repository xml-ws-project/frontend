import { HttpErrorResponse } from '@angular/common/http';
import { SpecialPeriodRequest } from './../../../interface/SpecialPeriodRequest';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PeriodType } from 'src/app/accommodation/enum/PeriodType.enum';
import { SpecialPeriodResponse } from 'src/app/accommodation/interface/SpecialPeriodResponse';
import { AccommdationService } from 'src/app/accommodation/service/accommdation.service';
import { DialogData } from 'src/app/accommodation/interface/DialogData';

@Component({
  selector: 'app-create-special-period-dialog',
  templateUrl: './create-special-period-dialog.component.html',
  styleUrls: ['./create-special-period-dialog.component.scss']
})
export class CreateSpecialPeriodDialogComponent implements OnInit {

  periodTypes: PeriodType[];
  specialPeriodRequest: SpecialPeriodRequest;
  startDate: Date;
  endDate: Date;

  constructor(public dialogRef: MatDialogRef<CreateSpecialPeriodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private toastrService: ToastrService,
    private accommodationService: AccommdationService) { }

  ngOnInit(): void {
    this.periodTypes = Object.values(PeriodType);
    this.specialPeriodRequest = {
      accommodationId: this.data.accommodationId,
      specialPeriodStart: '',
      specialPeriodEnd: '',
      specialPrice: 0,
      periodType: null
    }
  }

  createSpecialPeriod(): void {
    if (this.startDate != null || this.startDate != undefined) {
      var tempDate = this.startDate.setHours(this.startDate.getHours() + 2);
      this.specialPeriodRequest.specialPeriodStart = this.startDate.toISOString();
    } else {
      this.specialPeriodRequest.specialPeriodStart = null as any;
    }
    if (this.endDate != null || this.endDate != undefined) {
      var tempDate = this.endDate.setHours(this.endDate.getHours() + 2);
      this.specialPeriodRequest.specialPeriodEnd = this.endDate.toISOString();
    } else {
      this.specialPeriodRequest.specialPeriodEnd = null as any;
    }
    this.accommodationService.createSpecialPeriod(this.specialPeriodRequest).subscribe(
      (response: SpecialPeriodResponse) => {
        console.log(response);
        this.toastrService.success("New special period has been successfully created.")
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    )
    window.location.reload();
  }
}
