import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core'
import { RequestResponse } from '../../interface/RequestResponse'
import { RequestService } from '../../services/request.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']
  private _dataSource = new MatTableDataSource<RequestResponse>()
  private response

  constructor(private reqService: RequestService) {}

  public get dataSource() {
    return this._dataSource
  }

  public set dataSource(value) {
    this._dataSource = value
  }

  ngOnInit(): void {
    const dto = {
      id: '9cb78cb8-f25c-11ed-a05b-0242ac120003',
      role: 'HOST',
    }

    this.reqService.findAllByUser(dto).subscribe((response) => {
      console.log(response)
    })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }
}

export interface PeriodicElement {
  name: string
  position: number
  weight: number
  symbol: string
}
