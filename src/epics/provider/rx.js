// Import only what we need:

// Observable
import { Observable } from 'rxjs/Observable';
// Operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
// Static methods
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';

// Alternatively, we could import the entire core functionallity
// (would greatly increase bundle size):
//
// import Rx, { Observable } from 'rxjs/Rx';
//

export { Observable };
