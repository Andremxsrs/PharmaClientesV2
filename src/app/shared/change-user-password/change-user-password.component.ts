import { Component } from '@angular/core';

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.css']
})
export class ChangeUserPasswordComponent {
  current = 0;
  inputStep1: string = '';
  inputStep2: string = '';
  inputStep3: string = '';
  inputStep4: string = '';

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  done(): void {
    console.log('done');
  }
}
