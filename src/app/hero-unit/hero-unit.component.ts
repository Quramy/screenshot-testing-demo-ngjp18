import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-unit',
  template: `
  <div>
    <img src="/assets/logo.png" />
    <p>{{greeting}}</p>
  </div>
  `,
  styleUrls: ['./hero-unit.component.css']
})
export class HeroUnitComponent implements OnInit {

  greeting: string = 'Hello, ng-japan!';

  constructor() { }

  ngOnInit() {
  }

}
