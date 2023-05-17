import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { CustomToastrService } from 'src/app/shared/services/custom-toastr.service'
import { ToasterPosition } from 'src/app/shared/enums/ToasterPosition'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  public showError: boolean
  public errorMessage: string
  public form: FormGroup

  constructor(private router: Router, private authService: AuthService, private toastr: CustomToastrService) {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(undefined, Validators.required),
      lastName: new FormControl('', Validators.required),
      location: new FormControl(undefined, Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl(''),
      password: new FormControl('', Validators.required),
      role: new FormControl(undefined, Validators.required),
    })
  }
  onFormSubmit() {
    this.form.value.role ? (this.form.value.role = 'HOST') : (this.form.value.role = 'GUEST')
    this.form.value.username = this.form.value.email
    this.authService.register(this.form.value).subscribe(
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
  }
}
