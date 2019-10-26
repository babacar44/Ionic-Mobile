import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousOperationsPage } from './tous-operations.page';

describe('TousOperationsPage', () => {
  let component: TousOperationsPage;
  let fixture: ComponentFixture<TousOperationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousOperationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousOperationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
