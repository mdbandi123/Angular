import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggerTestComponent } from './stagger-test.component';

describe('StaggerTestComponent', () => {
  let component: StaggerTestComponent;
  let fixture: ComponentFixture<StaggerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaggerTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaggerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
