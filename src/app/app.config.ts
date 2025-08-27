import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    //HashStrategy estrategia para estar en el root de la single pages, lo que hace es poner un # y hace que no redirecciones a esa carpeta
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ]
};
