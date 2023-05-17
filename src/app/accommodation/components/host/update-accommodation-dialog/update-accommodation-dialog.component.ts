import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogData } from 'src/app/accommodation/interface/DialogData';
import { UpdateAccommodationRequest } from 'src/app/accommodation/interface/UpdateAccommodationRequest';
import { AccommdationService } from 'src/app/accommodation/service/accommdation.service';

@Component({
  selector: 'app-update-accommodation-dialog',
  templateUrl: './update-accommodation-dialog.component.html',
  styleUrls: ['./update-accommodation-dialog.component.scss']
})
export class UpdateAccommodationDialogComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  constructor(public dialogRef: MatDialogRef<UpdateAccommodationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private accommodationService: AccommdationService,
    private toastrService: ToastrService) { }
  updateRequest: UpdateAccommodationRequest;

  ngOnInit(): void {
    this.updateRequest = {
      accommodationId: this.data.accommodationId,
      start: null as any,
      end: null as any,
      price: 0
    }
  }

  update() {
    if (this.startDate != null || this.startDate != undefined) {
      var tempDate = this.startDate.setHours(this.startDate.getHours() + 2);
      this.updateRequest.start = this.startDate.toISOString();
    } else {
      this.updateRequest.start = null as any;
    }
    if (this.endDate != null || this.endDate != undefined) {
      var tempDate = this.endDate.setHours(this.endDate.getHours() + 2);
      this.updateRequest.end = this.endDate.toISOString();
    } else {
      this.updateRequest.end = null as any;
    }
    this.accommodationService.update(this.updateRequest).subscribe(
      (response: any) => {
        this.toastrService.success("Update passed successfully.")
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
    window.location.reload();
  }

}
