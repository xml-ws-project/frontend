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
    this.accommodationService.update(this.updateRequest).subscribe(
      (response: any) => {

      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

}
