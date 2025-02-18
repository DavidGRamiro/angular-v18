import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withViewTransitions({
        skipInitialTransition: true,
        // onViewTransitionCreated(transition) {
        //   console.log('Información de la transición', transition)
        // }
      })
    ), 
    provideClientHydration(),
    provideHttpClient(withFetch())


  
  ]
};
