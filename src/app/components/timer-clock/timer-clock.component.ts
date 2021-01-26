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
  public secondsToDday: string;
  public minutesToDday: string;
  public hoursToDday: string;
  public daysToDday: string;

  private getTimeDifference(): void {
    this.time = new Date();
    this.allocateTimeUnits();
  }

  private allocateTimeUnits(): void {
    this.secondsToDday = this.addingToFullNumber(this.time.getSeconds());
    this.minutesToDday = this.addingToFullNumber(this.time.getMinutes());
    this.hoursToDday = this.addingToFullNumber(this.time.getHours());
    this.daysToDday = this.dayNames[this.time.getDay()];
  }

  private addingToFullNumber(time: number): string {
    return time < 10 ? `0${time}` : String(time);
  }

  ngOnInit(): void {
    this.time = new Date();
    this.allocateTimeUnits();
    this.subscription = interval(1000).subscribe(() => {
      this.getTimeDifference();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
