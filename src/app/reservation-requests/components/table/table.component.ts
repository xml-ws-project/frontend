import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core'
import { RequestResponse } from '../../interface/RequestResponse'
import { RequestService } from '../../services/request.service'
import { AuthService } from 'src/app/auth/services/auth.service'
import { Subscription } from 'rxjs'
import { HostResponse } from '../../interface/HostResponse'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'start', 'end', 'status', 'accomID', 'numOfGuests', 'options', 'flights']
  private _dataSource = new MatTableDataSource<RequestResponse>()
  private userSub: Subscription | undefined
  private userId
  public userRole: string
  public showTable: boolean = false
  private requestDTO

  constructor(private reqService: RequestService, private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  public get dataSource() {
    return this._dataSource
  }

  public set dataSource(value) {
    this._dataSource = value
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.userId = user.id
      this.userRole = user.role
    })

    this.requestDTO = {
      id: this.userId,
      role: this.userRole,
    }

    this.reqService.findAllByUser(this.requestDTO).subscribe((response) => {
      this._dataSource = new MatTableDataSource(response)
      if (this._dataSource.data.length === 0 || response === undefined) {
        this.showTable = false
        return
      }

      this.showTable = true
    })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  onHostResponse(resId, accept) {
    const dto = {
      id: resId,
      accept: accept,
    }
    this.reqService.hostResponse(dto).subscribe((response) => {
      accept ? this.toastr.success(response) : this.toastr.error(response)
      this.refreshData()
    })
  }

  onGuestCancelation(resId) {
    this.reqService.guestResponse(resId).subscribe((response) => {
      this.toastr.info(response)
      this.refreshData()
    })
  }

  refreshData() {
    this.reqService.findAllByUser(this.requestDTO).subscribe((response) => {
      this._dataSource = response
    })
  }

  onFlightSearch(resId) {
    this.router.navigate([`/flight-search/${resId}`])
  }
}
