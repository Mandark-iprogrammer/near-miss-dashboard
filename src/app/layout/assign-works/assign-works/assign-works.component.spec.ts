import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignWorksComponent } from './assign-works.component';

describe('AssignWorksComponent', () => {
  let component: AssignWorksComponent;
  let fixture: ComponentFixture<AssignWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
