import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppFeature } from './state/app.state';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { AppEffects } from './state/app.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideStore({ [AppFeature.name]: AppFeature.reducer }),
    provideStoreDevtools({ name: 'Birthday App', maxAge: 15 }),
    provideEffects(AppEffects),
    provideAnimations(),
  ],
};
