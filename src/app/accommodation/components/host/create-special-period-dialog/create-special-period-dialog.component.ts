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
    this.accommodationService.createSpecialPeriod(this.specialPeriodRequest).subscribe(
      (response: SpecialPeriodResponse) => {
        console.log(response);
        //toastr.success
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    )
  }
}
