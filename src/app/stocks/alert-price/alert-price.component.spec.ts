import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPriceComponent } from './alert-price.component';

describe('AlertPriceComponent', () => {
  let component: AlertPriceComponent;
  let fixture: ComponentFixture<AlertPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertPriceComponent]
    });
    fixture = TestBed.createComponent(AlertPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
