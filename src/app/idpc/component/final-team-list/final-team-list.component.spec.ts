import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTeamListComponent } from './final-team-list.component';

describe('FinalTeamListComponent', () => {
  let component: FinalTeamListComponent;
  let fixture: ComponentFixture<FinalTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalTeamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
