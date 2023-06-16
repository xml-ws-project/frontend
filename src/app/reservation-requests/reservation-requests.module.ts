import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableComponent } from './components/table/table.component'
import { RequestsPageComponent } from './components/requests-page/requests-page.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [TableComponent, RequestsPageComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule],
})
export class ReservationRequestsModule {}
