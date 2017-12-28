import {Component,  Input} from '@angular/core';
import {AccountService} from '../util/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  // Dependency Injection by Constructor.
  // AccountService instance came from parent component. By the hierarchical injector.
  constructor(private accountService: AccountService) {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
  }

}
