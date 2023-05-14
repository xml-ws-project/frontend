import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccommodationDialogComponent } from './update-accommodation-dialog.component';

describe('UpdateAccommodationDialogComponent', () => {
  let component: UpdateAccommodationDialogComponent;
  let fixture: ComponentFixture<UpdateAccommodationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccommodationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccommodationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
