import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer-clock',
  templateUrl: './timer-clock.component.html',
  styleUrls: ['./timer-clock.component.scss'],
})
export class TimerClockComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  public time: Date;
  public secondsToDday: String;
  public minutesToDday: String;
  public hoursToDday: String;
  public daysToDday: String;

  private getTimeDifference() {
    this.time = new Date();
    this.allocateTimeUnits();
  }

  private allocateTimeUnits() {
    this.secondsToDday = this.addingToFullNumber(this.time.getSeconds());
    this.minutesToDday = this.addingToFullNumber(this.time.getMinutes());
    this.hoursToDday = this.addingToFullNumber(this.time.getHours());
    this.daysToDday = this.dayNames[this.time.getDay()];
  }

  private addingToFullNumber(time: Number): String {
    return time < 10 ? `0${time}` : String(time);
  }

  ngOnInit() {
    this.time = new Date();
    this.allocateTimeUnits();
    this.subscription = interval(1000).subscribe(() => {
      this.getTimeDifference();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
