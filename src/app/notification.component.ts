import { Component, inject, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: `
    <div class="d-flex flex-column gap-2">
      <button class="btn btn-primary" (click)="onRequestFirebasePermission()">request firebase token</button>
    </div>
  `,
})
export class NotificationComponent implements OnInit {
  afMessaging = inject(AngularFireMessaging);

  ngOnInit() {
    this.afMessaging.messages.subscribe(payload => console.log(payload));
  }

  onRequestFirebasePermission() {
    this.afMessaging.requestToken.subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
    });
  }
}
