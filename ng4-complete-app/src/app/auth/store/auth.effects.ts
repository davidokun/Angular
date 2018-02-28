import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as AuthActions from './auth.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase';
import {fromPromise} from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthEffects {

  @Effect()
  authSignUp = this.actions$
    .ofType(AuthActions.TRY_SIGN_UP)
    .map((action: AuthActions.TrySignUp) => {
      return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      return [
        {
          type: AuthActions.SIGN_UP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });

  @Effect()
  authSignIn = this.actions$
    .ofType(AuthActions.TRY_SIGN_IN)
    .map((action: AuthActions.TrySignUp) => {
      return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      return [
        {
          type: AuthActions.SIGN_IN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });

  constructor(private actions$: Actions) {
  }
}
