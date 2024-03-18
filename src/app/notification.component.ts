import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: `
    <h1>{{ slug }}</h1>
    <button (click)="onRequestPermission()">request permission</button>
    <button (click)="onNewNotification()">notification</button>
    <button (click)="onRequestToken()">request token</button>
  `,
  styles: ``,
})
export class NotificationComponent {
  activatedRoute = inject(ActivatedRoute);
  swPush = inject(SwPush);

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

  onRequestToken() {
    this.swPush.requestSubscription({
      serverPublicKey: 'BIpADrj_iNDBHlQ17myhsBj7CP6B9VNH-ZuCXklgJGiQvmli9eEXHSbuZvLP8CtOHTTRYO2dHZWNHVHG9rZ1ONY',
    }).then(res => console.log(res))

  }
}
