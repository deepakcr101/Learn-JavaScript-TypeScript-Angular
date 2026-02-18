import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { ProfileComponent } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,SignUp,ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learnProject1');
  handleClickEvent(){
    alert('Button Clicked!');
  }

  handleEvent(eventName: string) {
    console.log('Event:', eventName);
  }
}
