import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersinternetcafeComponent } from './usersinternetcafe.component';

describe('UsersinternetcafeComponent', () => {
  let component: UsersinternetcafeComponent;
  let fixture: ComponentFixture<UsersinternetcafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersinternetcafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersinternetcafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
