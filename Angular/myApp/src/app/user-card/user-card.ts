import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  name = "Deepak";
  age = 22;
  username = "";
  greetUser() {
    alert(`Hello, ${this.name} ! You are ${this.age} years old.`);
  }
}

