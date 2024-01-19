import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss',
})
export class GiftComponent {}
