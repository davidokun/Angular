import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {HttpEvent} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import {Observable} from 'rxjs/Observable';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  constructor(private dataStorageService: DataStorageService,
              private store: Store<fromApp.AppState>) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpEvent<Object>) => {
          console.log(response);
          // console.log(response.type === HttpEventType.Sent);
          // console.log(response.type === HttpEventType.Response);
        }
      );
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.LogOut());
  }
}
