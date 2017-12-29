
export class CounterService {

  activeCount = [];
  inactiveCount = [];

  countActive() {
    this.activeCount.push(this.activeCount.length + 1);
  }

  countInactive() {
    this.inactiveCount.push(this.inactiveCount.length + 1);
  }

}
