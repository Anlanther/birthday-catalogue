import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemDialogueComponent } from './item-dialogue/item-dialogue.component';
@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss',
})
export class CatalogueComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(item: string): void {
    const dialogRef = this.dialog.open(ItemDialogueComponent, {
      data: { item },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //ngrx call
    });
  }
}
