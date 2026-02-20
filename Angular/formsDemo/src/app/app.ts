import { Component, signal,computed } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, minLength, required,FormField } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule,FormField],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  email= new FormControl("");
  password = new FormControl("");

  login(){
    console.log(this.email.value);
    console.log(this.password.value);
  }

  reset(){
    this.email.reset();
    this.password.reset();
  }

  myForm=new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });

  handleProfile(){
    console.log("Profile submitted");
    console.log(this.myForm.value);
  }
 
  myForm1=new FormGroup({
    name1: new FormControl("",[Validators.required,Validators.minLength(3)]),
    email1: new FormControl("",[Validators.required,Validators.email]),
    password1: new FormControl("",[Validators.required,Validators.minLength(6)]),
  });
  handleProfile1(){
    console.log("Profile1 submitted");
    console.log(this.myForm1.value);
  }
 
  get name1(){
    return this.myForm1.get("name1");
  }

  get email1(){
    return this.myForm1.get("email1");
  }

  get password1(){
    return this.myForm1.get("password1");
  }

  
// Model you want to mirror (not strictly required)
  signalModel = signal({
    name: '',
    email: '',
  });

  // Build a typed form group
  form = new FormGroup({
    name: new FormControl(this.signalModel().name, {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: new FormControl(this.signalModel().email, {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6), Validators.email],
    }),
  });

  // Convenience getters to use in template
  nameCtrl = this.form.controls.name;
  emailCtrl = this.form.controls.email;

  // Convert errors to a list of messages for iteration
  nameErrors = computed(() => {
    const errors = this.nameCtrl.errors;
    if (!errors) return [];
    const msgs: string[] = [];
    if (errors['required']) msgs.push('Name is required');
    if (errors['minlength']) {
      const { requiredLength, actualLength } = errors['minlength'];
      msgs.push(`Name should be at least ${requiredLength} characters (currently ${actualLength}).`);
    }
    return msgs;
  });

  emailErrors = computed(() => {
    const errors = this.emailCtrl.errors;
    if (!errors) return [];
    const msgs: string[] = [];
    if (errors['required']) msgs.push('Email is required');
    if (errors['minlength']) {
      const { requiredLength, actualLength } = errors['minlength'];
      msgs.push(`Email should be at least ${requiredLength} characters (currently ${actualLength}).`);
    }
    if (errors['email']) msgs.push('Please enter a valid email address');
    return msgs;
  });

  submitSignalForm() {
    // Mark controls as touched to show errors when submitting
    this.nameCtrl.markAsTouched();
    this.emailCtrl.markAsTouched();

    if (this.form.invalid) return;

    console.log('Signal Form Submitted');
    console.log(this.nameCtrl.value);
    console.log(this.emailCtrl.value);

    // Optionally sync to signal model
    this.signalModel.set({
      name: this.nameCtrl.value!,
      email: this.emailCtrl.value!,
    });
  }

}