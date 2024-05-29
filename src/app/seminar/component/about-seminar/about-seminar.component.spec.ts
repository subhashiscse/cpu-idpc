import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSeminarComponent } from './about-seminar.component';

describe('AboutSeminarComponent', () => {
  let component: AboutSeminarComponent;
  let fixture: ComponentFixture<AboutSeminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSeminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
