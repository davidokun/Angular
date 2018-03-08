import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // let component: UserComponent;
  // let fixture: ComponentFixture<UserComponent>;
  //
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ UserComponent ]
  //   })
  //   .compileComponents();
  // }));
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(UserComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
