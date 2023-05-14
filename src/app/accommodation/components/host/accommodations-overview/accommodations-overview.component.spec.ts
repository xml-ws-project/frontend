import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationsOverviewComponent } from './accommodations-overview.component';

describe('AccommodationsOverviewComponent', () => {
  let component: AccommodationsOverviewComponent;
  let fixture: ComponentFixture<AccommodationsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommodationsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
