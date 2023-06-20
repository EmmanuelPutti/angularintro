import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiHelloGoodbyeComponent } from './hi-hello-goodbye.component';

describe('HiHelloGoodbyeComponent', () => {
  let component: HiHelloGoodbyeComponent;
  let fixture: ComponentFixture<HiHelloGoodbyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiHelloGoodbyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiHelloGoodbyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
