import { Component, OnInit } from '@angular/core'
import { NavigationStart, Router } from '@angular/router'
import { Subscription } from 'rxjs'

export let browserRefresh = false

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'VIMA Booking'
  private refreshSub: Subscription

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.refreshSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !this.router.navigated
      }
    })
  }
}
