import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainAppComponent } from './main-app/main-app.component'
import { ErrorPageComponent } from './shared/errors/error-page.component'
import { LoginPageComponent } from './auth/components/login-page/login-page.component'
import { RegisterPageComponent } from './auth/components/register-page/register-page.component'
import { LoginGuard } from './auth/guard/login.guard'
import { LogoutGuard } from './auth/guard/logout.guard'
import { EditPageComponent } from './auth/components/edit-page/edit-page/edit-page.component'

const routes: Routes = [
  {
    path: '',
    component: MainAppComponent,
    loadChildren: () => import('./main-app/main-app.module').then((x) => x.MainAppModule),
    title: 'VIMA Airlines',
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    loadChildren: () => import('./shared/errors/errors.module').then((x) => x.ErrorsModule),
    title: 'Error',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'VIMA Airlines | Login',
    canActivate: [LogoutGuard],
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    title: 'VIMA Airlines | Register',
    canActivate: [LogoutGuard],
  },
  {
    path: '**',
    redirectTo: '/error/notfound',
  },
  {
    path: 'edit',
    component: EditPageComponent,
    title: ' VIMA Airlines | eidt user',
    canActivate: [LogoutGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
