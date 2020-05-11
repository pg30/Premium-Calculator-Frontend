import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumFormComponent } from './premium-form.component';

describe('PremiumFormComponent', () => {
  let component: PremiumFormComponent;
  let fixture: ComponentFixture<PremiumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
