import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarSpeakerComponent } from './seminar-speaker.component';

describe('SeminarSpeakerComponent', () => {
  let component: SeminarSpeakerComponent;
  let fixture: ComponentFixture<SeminarSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarSpeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
