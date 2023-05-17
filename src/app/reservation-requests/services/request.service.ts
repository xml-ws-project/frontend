import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { UserRequestDTO } from '../interface/UserRequestDTO'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { RequestResponse } from '../interface/RequestResponse'
import { HostResponse } from '../interface/HostResponse'

@Injectable()
export class RequestService {
  private reservationUrl = environment.reservationURL
  constructor(private toastr: ToastrService, private http: HttpClient) {}

  public findAllByUser(request: UserRequestDTO): Observable<any> {
    return this.http.post<RequestResponse[]>(`${this.reservationUrl}/user/all`, request)
  }

  //http://localhost:8081/reservation/host-response

  public hostResponse(response: HostResponse): Observable<string> {
    return this.http.put(`${this.reservationUrl}/host-response`, response, { responseType: 'text' })
  }

  public guestResponse(resId): Observable<string> {
    return this.http.put(`${this.reservationUrl}/cancel/${resId}`, null, { responseType: 'text' })
  }
}
