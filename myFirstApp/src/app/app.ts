import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  //template: `<h1>{{title()}}</h1>`,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('myFirstApp');
  name= "Deepak Kumar";
  age= 22;

  displayDetails(){
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }

  getSum(a: number, b: number): number {
    return a + b;
  }
}


