import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroUnitComponent } from './hero-unit.component';

describe('HeroUnitComponent', () => {
  let component: HeroUnitComponent;
  let fixture: ComponentFixture<HeroUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
