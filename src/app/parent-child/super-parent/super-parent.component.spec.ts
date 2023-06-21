import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperParentComponent } from './super-parent.component';

describe('SuperParentComponent', () => {
  let component: SuperParentComponent;
  let fixture: ComponentFixture<SuperParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
