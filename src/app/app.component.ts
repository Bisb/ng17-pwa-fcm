import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { NotificationComponent } from './notification.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  SwUpdate = inject(SwUpdate);

  router = inject(Router);
  targetSlug = '';

  async ngOnInit() {
    if (this.SwUpdate.isEnabled) {
      setInterval(() => this.SwUpdate.checkForUpdate().then(updateAvailable => {
        if (updateAvailable) {
          console.log('New version available');
        }
      }), 3000);
    }
  }

  navigate() {
    this.router.navigate([this.targetSlug]).then();
  }
}
