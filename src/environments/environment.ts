// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080',
  firebase: {
    apiKey: 'AIzaSyAJ1A_kLKyizWpBADruke7i_HW_bgj2VSk',
    authDomain: 'finjob-management.firebaseapp.com',
    projectId: 'finjob-management',
    storageBucket: 'finjob-management.appspot.com',
    messagingSenderId: '843687220997',
    appId: '1:843687220997:web:26190aadbf47a340fbc96c'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
