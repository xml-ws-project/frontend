import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable()
export class RecommendService {
  private url = environment.accommodationURL
  constructor(private http: HttpClient) {}

  public recommend(userId): Observable<any> {
    return this.http.get(`${this.url}/recommended/${userId}`)
  }
}
