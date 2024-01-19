import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
  accessories: string[] = [];
  lamps: string[] = [];
  chairs: string[] = [];
  desks: string[] = [];
  storages: string[] = [];
  footRests: string[] = [];
  stands: string[] = [];
  deskAccessories: string[] = [];

  subscription: Subscription;

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
