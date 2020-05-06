import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationCitiesComponent } from './station-cities.component';

describe('StationCitiesComponent', () => {
  let component: StationCitiesComponent;
  let fixture: ComponentFixture<StationCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
