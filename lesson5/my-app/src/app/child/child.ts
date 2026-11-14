import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnDestroy {
  @Input() name = '';
  @Input() timer = 0;

  @Output() greeted = new EventEmitter<string>();
  @Output() timerStopped = new EventEmitter<number>();

  elapsedSeconds = 0;

  private startedAt: number | null = null;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  start(): void {
    if (this.startedAt !== null) {
      return;
    }

    this.elapsedSeconds = 0;
    this.startedAt = Date.now();

    this.intervalId = setInterval(() => {
      this.updateElapsedTime();
    }, 250);
  }

  stop(): void {
    if (this.startedAt === null) {
      return;
    }

    this.updateElapsedTime();
    this.clearTimer();
    this.timerStopped.emit(this.elapsedSeconds);
  }

  sayHello(): void {
    this.greeted.emit(`שלום ${this.name}!`);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  private updateElapsedTime(): void {
    if (this.startedAt !== null) {
      this.elapsedSeconds = Math.floor((Date.now() - this.startedAt) / 1000);
    }
  }

  private clearTimer(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.startedAt = null;
  }
}