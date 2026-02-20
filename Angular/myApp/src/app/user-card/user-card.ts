import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-card',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})

constructor(private user: User) {}

export class UserCard {
  name = "Deepak";
  age = 22;
  username = "";
  greetUser() {
    alert(`Hello, ${this.name} ! You are ${this.age} years old.`);
  }
  user= this.user.getUser();
}

