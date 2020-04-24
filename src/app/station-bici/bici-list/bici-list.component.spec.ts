import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiciListComponent } from './bici-list.component';

describe('BiciListComponent', () => {
  let component: BiciListComponent;
  let fixture: ComponentFixture<BiciListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiciListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
