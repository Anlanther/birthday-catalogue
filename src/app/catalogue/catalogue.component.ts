import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppFeature, AppStore } from '../state/app.state';
import { ItemDialogueComponent } from './item-dialogue/item-dialogue.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss',
})
export class CatalogueComponent {
  store = inject(Store<AppStore>);

  isComplete$: Observable<boolean>;

  constructor(public dialog: MatDialog) {
    this.isComplete$ = this.store.select(AppFeature.selectSelectionComplete);
  }

  openDialog(item: string): void {
    const dialogRef = this.dialog.open(ItemDialogueComponent, {
      data: { item },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //ngrx call
    });
  }
}
