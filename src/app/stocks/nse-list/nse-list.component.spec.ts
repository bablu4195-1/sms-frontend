import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NseListComponent } from './nse-list.component';

describe('NseListComponent', () => {
  let component: NseListComponent;
  let fixture: ComponentFixture<NseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NseListComponent]
    });
    fixture = TestBed.createComponent(NseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
