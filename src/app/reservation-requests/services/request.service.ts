import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { UserRequestDTO } from '../interface/UserRequestDTO'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { RequestResponse } from '../interface/RequestResponse'
import { HostResponse } from '../interface/HostResponse'
import { ReservationRequest } from 'src/app/accommodation/interface/ReservationRequest'
import { ReservationResponse } from 'src/app/accommodation/interface/ReservationResponse'

@Injectable()
export class RequestService {
  private reservationUrl = environment.reservationURL
  private monoUrl = environment.monoAppURL
  constructor(private toastr: ToastrService, private http: HttpClient) {}

  public findAllByUser(request: UserRequestDTO): Observable<any> {
    return this.http.post<RequestResponse[]>(`${this.reservationUrl}/user/all`, request)
  }

  public create(request: ReservationRequest): Observable<ReservationResponse> {
    return this.http.post<ReservationResponse>(`${this.reservationUrl}/`, request)
  }

  public hostResponse(response: HostResponse): Observable<string> {
    return this.http.put(`${this.reservationUrl}/host-response`, response, { responseType: 'text' })
  }

  public guestResponse(resId): Observable<string> {
    return this.http.put(`${this.reservationUrl}/cancel/${resId}`, null, { responseType: 'text' })
  }

  public findById(resid): Observable<any> {
    return this.http.get(`${this.reservationUrl}/${resid}`)
  }

  public findFlightsForReservation(dto): Observable<any> {
    return this.http.put(`${this.monoUrl}/flight/for/reservation`, dto)
  }
}
