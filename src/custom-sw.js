importScripts('ngsw-worker.js')

importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBC9Zn-No5c-sPmKuGtQm5KjPLZDzAPU2A',
  authDomain: 'ng-pwa-messaging.firebaseapp.c om',
  projectId: 'ng-pwa-messaging',
  storageBucket: 'ng-pwa-messaging.appspot.com',
  messagingSenderId: '58471394982',
  appId: '1:58471394982:web:2fe5acad6b02cffdba0e67',
});

const messaging = firebase.messaging();
