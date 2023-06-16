import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({ providedIn: 'root' })
export class FlightService {
  private monoUrl = environment.monoAppURL

  constructor(private http: HttpClient) {}

  public buyTicket(data: any): Observable<any> {
    return this.http.post<any>(`${this.monoUrl}/ticket`, data)
  }
}
