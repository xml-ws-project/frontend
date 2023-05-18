import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { AuthService } from 'src/app/auth/services/auth.service'
import { CustomToastrService } from 'src/app/shared/services/custom-toastr.service'
import { Router } from '@angular/router'
import { ToasterPosition } from 'src/app/shared/enums/ToasterPosition'
import { EditUserDTO } from 'src/app/auth/interface/EditUserDTO'

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  constructor(private authService: AuthService, private toastr: CustomToastrService, private router: Router) {}

  public showError: boolean
  public errorMessage: string

  firstName = ''
  lastName = ''
  phoneNumber = ''
  location = ''
  password = ''
  email = ''
  currentUsername = this.authService.getUsername()

  ngOnInit() {}

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
