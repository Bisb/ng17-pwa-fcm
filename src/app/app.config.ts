import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { SERVICE_WORKER } from '@angular/fire/compat/messaging';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServiceWorker('custom-sw.js', {
      enabled: true,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    {
      provide: SERVICE_WORKER,
      useFactory: async () => await navigator.serviceWorker.getRegistration('./ngsw-worker.js'),
    },
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig},
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebaseConfig))),
    importProvidersFrom(provideMessaging(() => getMessaging())),
  ],
};
