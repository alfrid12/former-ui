import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsViewerComponent } from './forms-viewer.component';

describe('FormsViewerComponent', () => {
  let component: FormsViewerComponent;
  let fixture: ComponentFixture<FormsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
