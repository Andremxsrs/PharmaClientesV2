import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuccesfulAuthComponent } from './login-succesful-auth.component';

describe('LoginSuccesfulAuthComponent', () => {
  let component: LoginSuccesfulAuthComponent;
  let fixture: ComponentFixture<LoginSuccesfulAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSuccesfulAuthComponent]
    });
    fixture = TestBed.createComponent(LoginSuccesfulAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
