import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);

    this.numberObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First package'); // Push the next data package
      }, 2000);
      setTimeout(() => {
        observer.next('Second package'); // Push the next data package
      }, 4000);
      setTimeout(() => {
        observer.error('This does not work'); // Push the next data package
        observer.complete(); // Finish sending data
      }, 5000);
      setTimeout(() => {
        observer.next('Third package'); // Push the next data package
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); }, // First parameter, callback function.
      (error: string) => { console.log(error); }, // Second parameter, handling error.
      () => { console.log('Completed!'); } // Third parameter, handling completed.

    );
  }

  ngOnDestroy(): void {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
