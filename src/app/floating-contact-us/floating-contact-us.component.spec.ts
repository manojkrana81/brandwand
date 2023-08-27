import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingContactUsComponent } from './floating-contact-us.component';

describe('FloatingContactUsComponent', () => {
  let component: FloatingContactUsComponent;
  let fixture: ComponentFixture<FloatingContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingContactUsComponent]
    });
    fixture = TestBed.createComponent(FloatingContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
