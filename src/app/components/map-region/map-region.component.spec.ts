import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRegionComponent } from './map-region.component';

describe('MapRegionComponent', () => {
  let component: MapRegionComponent;
  let fixture: ComponentFixture<MapRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
