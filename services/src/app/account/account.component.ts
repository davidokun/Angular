import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoggingService} from '../util/logging.service';
import {selectValueAccessor} from '@angular/forms/src/directives/shared';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {

  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // Dependency Injection by Constructor.
  constructor(private loggingService: LoggingService) {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggingService.logStatusChange(status);
  }

}
