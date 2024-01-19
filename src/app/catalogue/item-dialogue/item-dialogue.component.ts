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
  ItemMetadataService,
  VariableName,
} from '../../services/item-metadata.service';

export interface Item {
  name: string;
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
  item = '';
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  itemNames: Item[] = [];
  placeholderText = '';

  get placeholder() {
    return this.placeholderText;
  }

  set placeholder(item) {
    this.placeholderText = `e.g. `;
  }

  constructor(
    public dialogRef: MatDialogRef<ItemDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: VariableName },
    private itemNameService: ItemMetadataService
  ) {
    this.item = this.itemNameService.getDisplayName(data.item);
  }

  save() {
    console.log('item', this.item, this.itemNames);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.itemNames.push({ name: value });
    }

    event.chipInput!.clear();
  }

  remove(itemName: Item): void {
    const index = this.itemNames.indexOf(itemName);

    if (index >= 0) {
      this.itemNames.splice(index, 1);

      this.announcer.announce(`Removed ${itemName}`);
    }
  }

  edit(itemName: Item, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(itemName);
      return;
    }

    const index = this.itemNames.indexOf(itemName);
    if (index >= 0) {
      this.itemNames[index].name = value;
    }
  }
}
