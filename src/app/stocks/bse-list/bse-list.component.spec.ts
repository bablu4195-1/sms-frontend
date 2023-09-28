import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BseListComponent } from './bse-list.component';

describe('BseListComponent', () => {
  let component: BseListComponent;
  let fixture: ComponentFixture<BseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BseListComponent]
    });
    fixture = TestBed.createComponent(BseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
