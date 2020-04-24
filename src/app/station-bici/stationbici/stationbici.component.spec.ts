import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationbiciComponent } from './stationbici.component';

describe('StationbiciComponent', () => {
  let component: StationbiciComponent;
  let fixture: ComponentFixture<StationbiciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationbiciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationbiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
