import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredTeamListComponent } from './registered-team-list.component';

describe('RegisteredTeamListComponent', () => {
  let component: RegisteredTeamListComponent;
  let fixture: ComponentFixture<RegisteredTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredTeamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
