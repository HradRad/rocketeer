/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import  localeCs from "@angular/common/locales/cs";
import  localeEn from "@angular/common/locales/en";
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

registerLocaleData(localeCs, 'cs');
registerLocaleData(localeEn, 'en');

provideHttpClient(withInterceptorsFromDi());

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'en' },  // default locale
    importProvidersFrom(BrowserAnimationsModule) // ensure BrowserAnimationsModule is imported
  ]
}).catch(err => console.error(err));