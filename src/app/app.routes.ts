import { Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { GiftComponent } from './gift/gift.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: 'gift', component: GiftComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: '**', component: WelcomeComponent },
];
