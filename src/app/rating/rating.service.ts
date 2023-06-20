import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { HostRatingResponse } from './interface/HostRatingResponse'
import { AvgRateResponse } from './interface/AvgRateResponse'
import { EditRate } from './interface/EditRate'
@Injectable({
  providedIn: 'root',
})
export class RatingService {
  private ratingUrl = environment.ratingURL
  constructor(private http: HttpClient) {}

  public findAllByHostId(hostId): Observable<any> {
    return this.http.get<HostRatingResponse[]>(`${this.ratingUrl}/all/${hostId}`)
  }

  public delete(id): Observable<any> {
    return this.http.delete<string>(`${this.ratingUrl}/${id}`)
  }

  public getAvgRate(id): Observable<any> {
    return this.http.get<AvgRateResponse>(`${this.ratingUrl}/avg/${id}`)
  }

  public edit(editRate: EditRate): Observable<any> {
    console.log(editRate)
    return this.http.put<string>(`${this.ratingUrl}/edit`, editRate)
  }
}
