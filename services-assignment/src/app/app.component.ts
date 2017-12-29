import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeUsers = [];
  inactiveUsers = [];
  countActive = [];
  countInactive = [];

  constructor(private userService: UserService,
              private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.countActive = this.counterService.activeCount;
    this.countInactive = this.counterService.inactiveCount;
  }
}
