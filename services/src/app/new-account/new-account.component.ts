import {Component} from '@angular/core';
import {AccountService} from '../util/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  // Dependency Injection by Constructor.
  // AccountService instance came from parent component. By the hierarchical injector.
  constructor(private accountService: AccountService) {

    accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }

}
