import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOperationIdPage } from './list-operation-id.page';

describe('ListOperationIdPage', () => {
  let component: ListOperationIdPage;
  let fixture: ComponentFixture<ListOperationIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOperationIdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOperationIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
