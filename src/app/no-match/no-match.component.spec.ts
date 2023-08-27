import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMatchComponent } from './no-match.component';

describe('NoMatchComponent', () => {
  let component: NoMatchComponent;
  let fixture: ComponentFixture<NoMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoMatchComponent]
    });
    fixture = TestBed.createComponent(NoMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
