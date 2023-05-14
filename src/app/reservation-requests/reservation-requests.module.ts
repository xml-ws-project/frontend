import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableComponent } from './components/table/table.component'
import { RequestsPageComponent } from './components/requests-page/requests-page.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [TableComponent, RequestsPageComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
})
export class ReservationRequestsModule {}
