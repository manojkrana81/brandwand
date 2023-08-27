import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedMediaComponent } from './uploaded-media.component';

describe('UploadedMediaComponent', () => {
  let component: UploadedMediaComponent;
  let fixture: ComponentFixture<UploadedMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadedMediaComponent]
    });
    fixture = TestBed.createComponent(UploadedMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
