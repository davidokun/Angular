import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';
import {HttpEvent} from '@angular/common/http';

@Component ({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls : ['header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor (private dataStorageService: DataStorageService,
               private authService: AuthService) {
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
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
