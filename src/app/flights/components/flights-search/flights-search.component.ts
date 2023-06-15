import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss'],
})
export class FlightsSearchComponent implements OnInit {
  @Input() start = ''
  @Input() end = ''

  constructor() {}

  ngOnInit(): void {}
}
