import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZeeDataTableComponent } from './ng-zee-datatable.component';

describe('DataTableComponent', () => {
  let component: NgZeeDataTableComponent;
  let fixture: ComponentFixture<NgZeeDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgZeeDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgZeeDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
