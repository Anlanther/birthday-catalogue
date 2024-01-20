import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  CategoryMetadataService,
  CategoryName,
} from '../services/category-metadata';
import { AppFeature, AppStore } from '../state/app.state';

@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss',
})
export class GiftComponent implements OnDestroy {
  store = inject(Store<AppStore>);
  categoryMetadataService = inject(CategoryMetadataService);

  accessories: string[] = [];
  lamps: string[] = [];
  chairs: string[] = [];
  desks: string[] = [];
  storages: string[] = [];
  footRests: string[] = [];
  stands: string[] = [];
  deskAccessories: string[] = [];

  subscription: Subscription;

  get accessoryDisplayName() {
    return this.categoryMetadataService.getDisplayName(CategoryName.ACCESSORY);
  }
  get lampDisplayName() {
    return this.categoryMetadataService.getDisplayName(CategoryName.LAMP);
  }
  get chairDisplayName() {
    return this.categoryMetadataService.getDisplayName(CategoryName.CHAIR);
  }
  get deskDisplayName() {
    return this.categoryMetadataService.getDisplayName(CategoryName.DESK);
  }
  get storageDisplayName() {
    return this.categoryMetadataService.getDisplayName(CategoryName.STORAGE);
  }
  get footRestDisplayName() {
    return this.categoryMetadataService.getDisplayName(CategoryName.FOOT_REST);
  }
  get standDisplayName() {
    return this.categoryMetadataService.getDisplayName(CategoryName.STAND);
  }
  get deskAccessoryDisplayName() {
    return this.categoryMetadataService.getDisplayName(
      CategoryName.DESK_ACCESSORY
    );
  }

  constructor() {
    this.subscription = this.store
      .select(AppFeature.selectAppState)
      .subscribe((appState) => {
        this.accessories = [...appState.accessories];
        this.lamps = [...appState.lamps];
        this.chairs = [...appState.chairs];
        this.desks = [...appState.desks];
        this.storages = [...appState.storages];
        this.footRests = [...appState.footRests];
        this.stands = [...appState.stands];
        this.deskAccessories = [...appState.deskAccessories];
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
