import {Component} from '@angular/core';
import {LoggingService} from '../util/logging.service';
import {AccountService} from '../util/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService] // Used by Angular injector
})
export class NewAccountComponent {

  // Dependency Injection by Constructor.
  // AccountService instance came from parent component. By the hierarchical injector.
  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }

}
