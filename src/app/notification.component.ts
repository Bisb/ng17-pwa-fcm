import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: `
    <h1>{{ slug }}</h1>
    <button (click)="onRequestPermission()">request permission</button>
    <button (click)="onNewNotification()">notification</button>
  `,
  styles: ``,
})
export class NotificationComponent {
  activatedRoute = inject(ActivatedRoute);

  slug = 'Nope';

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.slug = params['slug']);
  }

  onNewNotification() {
    new Notification('Test', {'body': 'was sup', icon: '/assets/icons/icon-512x512.png'});
  }

  async onRequestPermission() {
    const permission = await Notification.requestPermission().then();
    console.log(permission);
  }
}
