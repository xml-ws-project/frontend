import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccommodationRequest } from '../interface/AccommodationRequest';
import { Observable, BehaviorSubject } from 'rxjs';
import { AccommodationResponse } from '../interface/AccommodationResponse';
import { UpdateAccommodationRequest } from '../interface/UpdateAccommodationRequest';
import { SearchRequest } from '../interface/SearchRequest';
import { SearchResponse } from '../interface/SearchResponse';
import { SearchResult } from '../components/class/SearchResult';
import { browserRefresh } from 'src/app/app.component';
import { SpecialPeriodRequest } from '../interface/SpecialPeriodRequest';
import { SpecialPeriodResponse } from '../interface/SpecialPeriodResponse';

@Injectable({
  providedIn: 'root'
})
export class AccommdationService {

  private apiServiceUrl = environment.accommodationURL;
  private accommodationSource = new BehaviorSubject(null as any);
  desiredAccommodations = this.accommodationSource.asObservable()

  constructor(private http: HttpClient) {
    let storedProp = localStorage.getItem('searchResult');
    if (storedProp) this.changeData(JSON.parse(storedProp), false);
  }

  changeData(data: SearchResult, storeProp: boolean = false) {
    if (storeProp) localStorage.setItem('searchResult', JSON.stringify(data))
    this.accommodationSource.next(data);
  }

  deleteData(): void {
    if (!browserRefresh) {
      localStorage.removeItem('searchResult');
    }
  }

  public create(request: AccommodationRequest): Observable<AccommodationResponse> {
    return this.http.post<AccommodationResponse>(`${this.apiServiceUrl}/`, request);
  }

  public update(request: UpdateAccommodationRequest): Observable<any> {
    return this.http.patch<any>(`${this.apiServiceUrl}/`, request);
  }

  public findById(id: string): Observable<AccommodationResponse> {
    return this.http.get<AccommodationResponse>(`${this.apiServiceUrl}/${id}`);
  }

  public findAllByHostId(id: string): Observable<AccommodationResponse[]> {
    return this.http.get<AccommodationResponse[]>(`${this.apiServiceUrl}/all/${id}`);
  }

  public findAll(): Observable<AccommodationResponse[]> {
    return this.http.get<AccommodationResponse[]>(`${this.apiServiceUrl}/all`);
  }

  public search(request: SearchRequest): Observable<SearchResponse[]> {
    return this.http.post<SearchResponse[]>(`${this.apiServiceUrl}/search`, request);
  }

  public createSpecialPeriod(request: SpecialPeriodRequest): Observable<SpecialPeriodResponse> {
    return this.http.post<SpecialPeriodResponse>(`${this.apiServiceUrl}/special-period`, request);
  }
}
