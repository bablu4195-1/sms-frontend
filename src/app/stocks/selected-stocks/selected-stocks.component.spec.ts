import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedStocksComponent } from './selected-stocks.component';

describe('SelectedStocksComponent', () => {
  let component: SelectedStocksComponent;
  let fixture: ComponentFixture<SelectedStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedStocksComponent]
    });
    fixture = TestBed.createComponent(SelectedStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
