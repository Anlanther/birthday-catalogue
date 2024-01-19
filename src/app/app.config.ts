import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppFeature } from './state/app.state';

import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideStore({ [AppFeature.name]: AppFeature.reducer }),
    provideStoreDevtools({ name: 'Birthday App', maxAge: 15 }),
    provideAnimations()
],
};
