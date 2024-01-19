import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private _email = '';

  test() {
    throw new Error('Testing');
  }
}
