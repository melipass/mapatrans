import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPlaceComponent } from './form-add-place.component';

describe('FormAddPlaceComponent', () => {
  let component: FormAddPlaceComponent;
  let fixture: ComponentFixture<FormAddPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
