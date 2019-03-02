import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorfoundComponent } from './errorfound.component';

describe('ErrorfoundComponent', () => {
  let component: ErrorfoundComponent;
  let fixture: ComponentFixture<ErrorfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
