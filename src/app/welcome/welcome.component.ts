import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  emailForm = new FormControl('');
  private _email = '';

  set email(email: string) {
    this._email = email;
  }
  sendEmail() {
    const email = this.emailForm.value ?? '';
    // this.emailService.sendEmail(email);
  }
}
