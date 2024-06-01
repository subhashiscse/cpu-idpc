import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryCommitteeComponent } from './advisory-committee.component';

describe('AdvisoryCommitteeComponent', () => {
  let component: AdvisoryCommitteeComponent;
  let fixture: ComponentFixture<AdvisoryCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
