import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  imports: [FormsModule],
  templateUrl: './form-example.html',
  styleUrl: './form-example.css',
})
export class FormExample {
 
  username1 = "Deepak";
  isDisabled = false;
  profileImage="profileImage.png";
  toggle() {
    this.isDisabled = !this.isDisabled;
  }

}
