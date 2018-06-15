import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-unit',
  template: `
  <div class="inner">
    <img src="/assets/logo.png" />
    <p class="message" *ngIf="!disabledGreeting">{{greeting}}</p>
  </div>
  `,
  styleUrls: ['./hero-unit.component.css']
})
export class HeroUnitComponent implements OnInit {

  @Input() greeting = 'Hello, ng-japan 2018';

  @Input() disabledGreeting = false;

  constructor() { }

  ngOnInit() {
  }

}
