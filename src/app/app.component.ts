import { Component, OnInit } from '@angular/core'
import { NavigationStart, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { AuthService } from './auth/services/auth.service'

export let browserRefresh = false

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'VIMA Booking'
  isLogged = false
  private refreshSub: Subscription
  private userSub: Subscription | undefined

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin()
    this.userSub = this.authService.user.subscribe((user) => {
      this.isLogged = !!user
    })
    this.refreshSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !this.router.navigated
      }
    })
  }
}
