import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesMapComponent } from './cities-map.component';

describe('CitiesMapComponent', () => {
  let component: CitiesMapComponent;
  let fixture: ComponentFixture<CitiesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
