import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { NotificationComponent } from './notification.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  push = inject(SwPush);
  swUpdate = inject(SwUpdate);
  router = inject(Router);

  targetInput = '';

  ngOnInit() {
    Notification.requestPermission(permission => console.log(permission))
      .then();
    this.push.subscription.subscribe(v => console.log(v))
    this.push.messages.subscribe(res => console.log(res))

    if (this.swUpdate.isEnabled) {
      setInterval(() => this.swUpdate.checkForUpdate().then(updateAvailable => {
        if (updateAvailable) {
          console.warn('Update available');
        }
      }), 3000);
    }
  }


  async navigate() {
    await this.router.navigate([this.targetInput]);
  }
}
