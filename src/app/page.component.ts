import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    FormsModule,
  ],
  template: `<h2>{{ slug }}</h2>`,
})
export class PageComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  slug: string = 'default';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.slug = params['slug'];
    });
  }
}
