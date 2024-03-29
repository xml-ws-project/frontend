import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, Observable, PartialObserver, tap, throwError } from 'rxjs'
import { environment } from 'src/environments/environment'
import { User } from '../model/user.module'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { LoginDTO } from '../interface/LoginDTO'
import jwtDecode from 'jwt-decode'
import { ToastrService } from 'ngx-toastr'
import { RegisterDTO } from '../interface/RegisterDTO'
import { DeleteUserDTO } from '../interface/DeleteUserDTO'
import { HttpHeaders } from '@angular/common/http'
import { EditUserDTO } from '../interface/EditUserDTO'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenExpirationTimer: any
  user = new BehaviorSubject<User>(null as any)
  authURL = environment.authURL

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {}

  public register(data: RegisterDTO): Observable<string> {
    return this.http.post(`${this.authURL}/register`, data, { responseType: 'text' }).pipe(catchError(this.handleError))
  }

  public login(data: LoginDTO): Observable<string> {
    return this.http
      .post(`${this.authURL}/authenticate`, data, { responseType: 'text' })
      .pipe(
        tap((response) => {
          this.handleLogin(response)
        }),
      )
      .pipe(catchError(this.handleError))
  }

  private handleLogin(token: string) {
    var decoded: any = jwtDecode(token)
    var id = decoded.sub.split(',')[0]
    var user = new User(id, decoded.role, token, decoded.exp)
    this.user.next(user)
    localStorage.setItem('user', JSON.stringify(user))
    this.autoLogout(decoded.exp)
  }

  private handleError(error: HttpErrorResponse) {
    var errorMessage = 'An unknown error occurred.'
    if (!error.error || error.error.type) return throwError(errorMessage)

    return throwError(error.error)
  }

  public autoLogin() {
    const userData: {
      id: string
      role: string
      _token: string
      _tokenExpirationDate: number
    } = JSON.parse(localStorage.getItem('user') || 'null')

    if (!userData) {
      return
    }
    const loadedUser = new User(userData.id, userData.role, userData._token, new Date(userData._tokenExpirationDate * 1000))
    if (loadedUser.token) {
      this.user.next(loadedUser)
      //this.autoLogout(new Date(userData._tokenExpirationDate).getTime() - new Date().getTime())
    }
  }

  public logout() {
    this.user.next(null as any)
    this.router.navigate([''])
    this.toastr.success('You have been successfully logged out.', 'Goodbye!')
    localStorage.removeItem('user')
    if (this.tokenExpirationTimer) clearTimeout(this.tokenExpirationTimer)

    this.tokenExpirationTimer = null
  }

  public autoLogout(expireIn: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout()
    }, expireIn)
  }

  public isLogged() {
    return !!this.user.value
  }

  public deleteUser(): Observable<String> {
    const username = this.getUsername()

    const dto: DeleteUserDTO = {
      username: username,
    }

    return this.http.post(`${this.authURL}/dele`, dto, { responseType: 'text' })
  }

  public editUser(dto: DeleteUserDTO): Observable<String> {
    return this.http.patch(`${this.authURL}/edit`, dto, { responseType: 'text' })
  }

  public getUsername() {
    var user = localStorage.getItem('user')
    var json = JSON.parse(user)
    var decoded = jwtDecode(json._token)
    var sub = decoded['sub']
    return sub.split(',')[1].trim()
  }

  public getHostIdByUsername(username: string): Observable<string> {
    return this.http.get<string>(this.authURL + '/' + username)
  }
}
