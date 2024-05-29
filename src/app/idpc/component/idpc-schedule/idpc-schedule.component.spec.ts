import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdpcScheduleComponent } from './idpc-schedule.component';

describe('IdpcScheduleComponent', () => {
  let component: IdpcScheduleComponent;
  let fixture: ComponentFixture<IdpcScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdpcScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdpcScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
