import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoggingService} from '../util/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // Dependency Injection by Constructor.
  constructor(private loggingService: LoggingService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
  }

}
