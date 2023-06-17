import { Router } from '@angular/router'
import { SearchRequest } from './../../interface/SearchRequest'
import { ToastrService } from 'ngx-toastr'
import { AccommdationService } from './../../service/accommdation.service'
import { Component, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { SearchResponse } from '../../interface/SearchResponse'
import { SearchResult } from '../class/SearchResult'
import { AccommodationResponse } from '../../interface/AccommodationResponse'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  valueCountry = ''
  valueCity = ''
  searchRequest: SearchRequest
  startDate: Date
  endDate: Date

  constructor(private accommodationService: AccommdationService, private toastrService: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.searchRequest = {
      country: '',
      city: '',
      guests: 1,
      start: null as any,
      end: null as any,
      pageSize: 100,
      pageNumber: 0,
    }
  }

  search(): void {
    if (this.startDate != null || this.startDate != undefined) {
      var tempDate = this.startDate.setHours(this.startDate.getHours() + 2)
      this.searchRequest.start = this.startDate.toISOString()
    } else {
      this.searchRequest.start = null as any
    }
    if (this.endDate != null || this.endDate != undefined) {
      var tempDate = this.endDate.setHours(this.endDate.getHours() + 2)
      this.searchRequest.end = this.endDate.toISOString()
    } else {
      this.searchRequest.end = null as any
    }
    this.accommodationService.search(this.searchRequest).subscribe(
      (response: SearchResponse[]) => {
        var searchResult: SearchResult = new SearchResult(response, this.searchRequest.guests, this.searchRequest.start, this.searchRequest.end)
        this.accommodationService.changeData(searchResult, true)
        this.router.navigate(['/result-overview'])
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message)
      },
    )
  }
}
