import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoryName } from '../services/category-metadata';
import { AppActions } from '../state/app.actions';
import { AppFeature, AppStore } from '../state/app.state';

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

  get accessory() {
    return CategoryName.ACCESSORY;
  }
  get lamp() {
    return CategoryName.LAMP;
  }
  get chair() {
    return CategoryName.CHAIR;
  }
  get desk() {
    return CategoryName.DESK;
  }
  get storage() {
    return CategoryName.STORAGE;
  }
  get footRest() {
    return CategoryName.FOOT_REST;
  }
  get stand() {
    return CategoryName.STAND;
  }
  get deskAccessory() {
    return CategoryName.DESK_ACCESSORY;
  }

  constructor(public dialog: MatDialog) {
    this.isComplete$ = this.store.select(AppFeature.selectSelectionComplete);
  }

  openDialog(item: CategoryName): void {
    this.store.dispatch(AppActions.openDialogue(item));
  }
}
