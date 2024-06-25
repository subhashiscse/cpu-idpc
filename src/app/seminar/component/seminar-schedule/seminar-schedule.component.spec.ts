import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarScheduleComponent } from './seminar-schedule.component';

describe('SeminarScheduleComponent', () => {
  let component: SeminarScheduleComponent;
  let fixture: ComponentFixture<SeminarScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
