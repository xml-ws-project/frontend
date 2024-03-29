// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  reservationURL: 'http://localhost:8081/reservation',
  authURL: 'http://localhost:8081/api/auth',
  accommodationURL: 'http://localhost:8081/accommodation',
  monoAppURL: 'http://localhost:5159',
  recommendURL: 'http://localhost:8081/recommendation',
  notificationURL: 'http://localhost:8081/notification'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
