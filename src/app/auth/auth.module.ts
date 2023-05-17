import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms'
import { LoaderModule } from '../shared/loader/loader.module'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { HomeButtonComponent } from '../shared/components/home-button/home-button.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { RegisterFormComponent } from './components/register-form/register-form.component'
import { RegisterPageComponent } from './components/register-page/register-page.component'
import { LoginPageComponent } from './components/login-page/login-page.component'

@NgModule({
  declarations: [HomeButtonComponent, LoginPageComponent, LoginFormComponent, RegisterPageComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    LoaderModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
