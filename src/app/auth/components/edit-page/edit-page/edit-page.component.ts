import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { AuthService } from 'src/app/auth/services/auth.service'
import { CustomToastrService } from 'src/app/shared/services/custom-toastr.service'
import { Router } from '@angular/router'
import { ToasterPosition } from 'src/app/shared/enums/ToasterPosition'
import { EditUserDTO } from 'src/app/auth/interface/EditUserDTO'
import { NotificationOptions } from 'src/app/auth/interface/NotificationOptions'
import { NotificationService } from 'src/app/auth/services/notification.service'
import { HttpErrorResponse } from '@angular/common/http'
import { ThemePalette } from '@angular/material/core'

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  constructor(private authService: AuthService,
    private toastr: CustomToastrService,
    private router: Router,
    private notificationService: NotificationService) { }

  public showError: boolean
  public errorMessage: string
  public userNotificationOptions: NotificationOptions;
  public userInfo: any;
  color: ThemePalette = 'accent';

  firstName = ''
  lastName = ''
  phoneNumber = ''
  location = ''
  password = ''
  email = ''
  currentUsername = this.authService.getUsername()

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.userInfo = user;
      this.getUserNotificationOptions();
    })
  }

  getUserNotificationOptions(): void {
    this.notificationService.get(this.userInfo.id).subscribe(
      (response: NotificationOptions) => {
        console.log(response)
        this.userNotificationOptions = response;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Error", error.message, ToasterPosition.topCenter);
      }
    );
  }

  editNotificationOptions(): void {
    var editDto = {
      userId: this.userInfo.id,
      reservationRequest: this.userNotificationOptions.reservationRequest,
      reservationCancellation: this.userNotificationOptions.reservationCancellation,
      profileRating: this.userNotificationOptions.profileRating,
      accommodationRating: this.userNotificationOptions.accommodationRating,
      distinguishedHostStatus: this.userNotificationOptions.distinguishedHostStatus,
      hostsReservationAnswer: this.userNotificationOptions.hostsReservationAnswer
    }
    this.notificationService.editNotificationOptions(editDto).subscribe(
      (response: NotificationOptions) => {
        this.toastr.success("", "Accommodation is successfully created.", ToasterPosition.topCenter);
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Error", error.message, ToasterPosition.topCenter);
      }
    );
  }

  onFormSubmit() {
    const dto: EditUserDTO = {
      location: this.location,
      email: this.email,
      username: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      currentUsername: this.currentUsername,
    }

    this.authService.editUser(dto).subscribe(
      (response: string) => {
        this.toastr.success(null, response, ToasterPosition.topCenter)
        this.router.navigate([''])
      },
      (errorMessage) => {
        this.toastr.error(null, errorMessage, ToasterPosition.topCenter)
        this.showError = true
        this.errorMessage = errorMessage
      },
    )
    if (this.password != '' || this.email != '') {
      this.authService.logout()
      this.router.navigate(['/login'])
    }
  }
}
