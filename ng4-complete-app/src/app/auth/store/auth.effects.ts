import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthEffects {

  @Effect()
  authSignUp;

  constructor(private actions$: Actions) {}
}
