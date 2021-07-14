import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPlaceComponent } from './form-edit-place.component';

describe('FormEditPlaceComponent', () => {
  let component: FormEditPlaceComponent;
  let fixture: ComponentFixture<FormEditPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
