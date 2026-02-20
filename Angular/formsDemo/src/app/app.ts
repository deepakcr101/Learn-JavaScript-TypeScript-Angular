import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, minLength, required, FormField, email, submit } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, FormField],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class App {
  email = new FormControl("");
  password = new FormControl("");

  login() {
    console.log(this.email.value);
    console.log(this.password.value);
  }

  reset() {
    this.email.reset();
    this.password.reset();
  }

  myForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });

  handleProfile() {
    console.log("Profile submitted");
    console.log(this.myForm.value);
  }

  myForm1 = new FormGroup({
    name1: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email1: new FormControl("", [Validators.required, Validators.email]),
    password1: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });
  handleProfile1() {
    console.log("Profile1 submitted");
    console.log(this.myForm1.value);
  }

  get name1() {
    return this.myForm1.get("name1");
  }

  get email1() {
    return this.myForm1.get("email1");
  }

  get password1() {
    return this.myForm1.get("password1");
  }


  // Signal Forms
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, { message: 'Email is required' });
    email(fieldPath.email, { message: 'Enter a valid email address' });
    required(fieldPath.password, { message: 'Password is required' });
  }
  );

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      console.log('Logging in with:', credentials);
      console.log('Performing login logic here...');
    });
  }
}