import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWOrksComponent } from './how-it-works.component';

describe('HowItWOrksComponent', () => {
  let component: HowItWOrksComponent;
  let fixture: ComponentFixture<HowItWOrksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWOrksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWOrksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
