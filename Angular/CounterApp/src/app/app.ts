import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count=0;
  increment() {
     this.count++;
  }
  reset() {
    this.count = 0;
  }
  decrement() {
    this.count--;
  }
}