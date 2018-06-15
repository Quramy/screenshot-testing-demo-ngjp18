import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-unit',
  template: `
  <div class="inner">
    <img src="/assets/logo.png" />
    <p class="message">{{greeting}}</p>
  </div>
  `,
  styleUrls: ['./hero-unit.component.css']
})
export class HeroUnitComponent implements OnInit {

  greeting: string = 'Hello, ng-japan 2018';

  constructor() { }

  ngOnInit() {
  }

}
