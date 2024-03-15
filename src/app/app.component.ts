import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  push = inject(SwPush);
  aRoute = inject(ActivatedRoute);

  ngOnInit() {
    const slug = this.aRoute.snapshot.params['slug'];
    console.log(slug)

    Notification.requestPermission(permission => console.log(permission))
      .then();
    this.push.subscription.subscribe(v => console.log(v))
    this.push.messages.subscribe(res => console.log(res))
  }


}
