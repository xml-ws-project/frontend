import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common'
import { LoaderModule } from './shared/loader/loader.module'
import { MainAppComponent } from './main-app/main-app.component'
import { MainAppModule } from './main-app/main-app.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoaderService } from './shared/loader/service/loader.service'
import { AuthModule } from './auth/auth.module'
import { CustomToastrService } from './shared/services/custom-toastr.service'
import { JwtInterceptor } from './interceptor/jwt.interceptor'
import { ToastrModule } from 'ngx-toastr'
import { AddAccomComponent } from './add-accom/add-accom.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  declarations: [AppComponent, AddAccomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LoaderModule,
    MainAppModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    CustomToastrService,
    LoaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
