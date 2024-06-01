import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverningCommitteeComponent } from './governing-committee.component';

describe('GoverningCommitteeComponent', () => {
  let component: GoverningCommitteeComponent;
  let fixture: ComponentFixture<GoverningCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoverningCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoverningCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
