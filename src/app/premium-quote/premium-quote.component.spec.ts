import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumQuoteComponent } from './premium-quote.component';

describe('PremiumQuoteComponent', () => {
  let component: PremiumQuoteComponent;
  let fixture: ComponentFixture<PremiumQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
