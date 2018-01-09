import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      // Grab params only at component initialization.
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // Get params reactively.
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }


  ngOnDestroy(): void {
    // Remove manually the subscription on component destroy.
    this.paramsSubscription.unsubscribe();
  }
}
