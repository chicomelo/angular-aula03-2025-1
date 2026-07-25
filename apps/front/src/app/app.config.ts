import { ApplicationConfig, importProvidersFrom, InjectionToken } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('URL base da API');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
    ), provideAnimationsAsync(),
    {
      provide: API_BASE_URL,
      useValue: 'http://localhost:3333/api'
    },
    importProvidersFrom(HttpClientModule),
  ],
};
