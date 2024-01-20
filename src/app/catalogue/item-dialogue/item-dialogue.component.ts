import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatChipEditedEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  CategoryMetadataService,
  CategoryName,
} from '../../services/category-metadata';

interface Item {
  name: string;
}

interface DialogueItemMetadata {
  name: string;
  displayName: string;
  items: Item[];
}

@Component({
  selector: 'app-item-dialogue',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './item-dialogue.component.html',
  styleUrl: './item-dialogue.component.scss',
})
export class ItemDialogueComponent {
  categoryNameService = inject(CategoryMetadataService);

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  categoryDisplayName = '';
  categoryName: CategoryName;
  addOnBlur = true;
  items: Item[] = [];

  constructor(
    public dialogRef: MatDialogRef<ItemDialogueComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { categoryName: CategoryName; items: string[] }
  ) {
    this.categoryName = data.categoryName;
    this.categoryDisplayName = this.categoryNameService.getDisplayName(
      data.categoryName
    );
    const hasExistingItems = data.items.length > 0;
    if (hasExistingItems) {
      this.items = [...data.items.map((i) => ({ name: i }))];
    }
  }

  save() {
    this.dialogRef.close({
      categoryName: this.categoryName,
      items: this.items.map((item) => item.name),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.items.push({ name: value });
    }

    event.chipInput!.clear();
  }

  remove(itemName: Item): void {
    const index = this.items.indexOf(itemName);

    if (index >= 0) {
      this.items.splice(index, 1);

      this.announcer.announce(`Removed ${itemName}`);
    }
  }

  edit(itemName: Item, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(itemName);
      return;
    }

    const index = this.items.indexOf(itemName);
    if (index >= 0) {
      this.items[index].name = value;
    }
  }
}
