import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetialComponent } from './form-detial.component';

describe('FormDetialComponent', () => {
  let component: FormDetialComponent;
  let fixture: ComponentFixture<FormDetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
