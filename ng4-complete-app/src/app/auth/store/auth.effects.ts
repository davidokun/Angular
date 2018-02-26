import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  authSignUp = this.actions$
    .ofType(AuthActions.TRY_SIGN_UP);

  constructor(private actions$: Actions) {}
}
