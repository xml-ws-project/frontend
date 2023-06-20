import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { EditNotificationOptions } from '../interface/EditNotificationOptions';
import { Observable } from 'rxjs';
import { NotificationOptions } from '../interface/NotificationOptions';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationURL = environment.notificationURL;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  public editNotificationOptions(editDto: EditNotificationOptions): Observable<NotificationOptions> {
    return this.http.patch<NotificationOptions>(`${this.notificationURL}/`, editDto);
  }

  public get(userId: number): Observable<NotificationOptions> {
    return this.http.get<NotificationOptions>(`${this.notificationURL}/${userId}`);
  }

}
