import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  template: `<h2>{{ slug }}</h2>`,
  styles: ``,
})
export class PageComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  slug = 'default';

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.slug = params['slug']);
  }
}
