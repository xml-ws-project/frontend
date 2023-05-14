import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../../interface/SearchResponse';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-result-overview',
  templateUrl: './result-overview.component.html',
  styleUrls: ['./result-overview.component.scss']
})
export class ResultOverviewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'country', 'city', 'unitPrice', 'totalPrice'];
  dataSource = new MatTableDataSource<SearchResponse>();
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<SearchResponse>();
  }

}
