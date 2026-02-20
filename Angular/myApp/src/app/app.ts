import { Component, Directive, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCard } from './user-card/user-card';
import { FormExample } from './form-example/form-example';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserCard,FormExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp');
  role = 'admin';
  greet() {
  alert("Hello Deepak!");
}
}
