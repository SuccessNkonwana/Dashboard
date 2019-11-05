import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetCafeComponent } from './internet-cafe.component';

describe('InternetCafeComponent', () => {
  let component: InternetCafeComponent;
  let fixture: ComponentFixture<InternetCafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetCafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
