import { Component } from '@angular/core';
import { Child } from './child/child';

@Component({
  imports: [Child],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  childName = 'ChanaMoyal';
  greeting = '';

  showGreeting(message: string): void {
    this.greeting = message;
  }
  timerDuration: number | null = null;

showTimerDuration(seconds: number): void {
  this.timerDuration = seconds;
}
}