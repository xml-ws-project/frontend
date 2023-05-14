import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { UserRequestDTO } from '../interface/UserRequestDTO'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { RequestResponse } from '../interface/RequestResponse'

@Injectable()
export class RequestService {
  private reservationUrl = environment.reservationURL
  constructor(private toastr: ToastrService, private http: HttpClient) {}

  public findAllByUser(request: UserRequestDTO): Observable<any> {
    return this.http.post<RequestResponse[]>(`${this.reservationUrl}/user/all`, request)
  }
}
