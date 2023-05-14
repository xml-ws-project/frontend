import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpecialPeriodDialogComponent } from './create-special-period-dialog.component';

describe('CreateSpecialPeriodDialogComponent', () => {
  let component: CreateSpecialPeriodDialogComponent;
  let fixture: ComponentFixture<CreateSpecialPeriodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSpecialPeriodDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSpecialPeriodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
