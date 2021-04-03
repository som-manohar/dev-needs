import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsUtilityComponent } from './js-utility.component';

describe('JsUtilityComponent', () => {
  let component: JsUtilityComponent;
  let fixture: ComponentFixture<JsUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
