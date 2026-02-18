import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks= signal([
    {id:1,title:"Task 1",completed:false}
  ]);
 
  title = signal('')
  
  addTask() {
  if (this.title()) {
    this.tasks.update(item => (
      [...item, {
        id: this.tasks().length+1,
        title: this.title(),
        completed: false
      }]
    ))
    this.title.set('');
  }
}

  deleteTask(id:number){
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }
}
