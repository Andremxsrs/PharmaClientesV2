import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginErrorAuthComponent } from './login-error-auth.component';

describe('LoginErrorAuthComponent', () => {
  let component: LoginErrorAuthComponent;
  let fixture: ComponentFixture<LoginErrorAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginErrorAuthComponent]
    });
    fixture = TestBed.createComponent(LoginErrorAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
