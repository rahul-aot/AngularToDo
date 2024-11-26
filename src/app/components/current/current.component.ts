import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask, TaskList } from '../../model/model';

@Component({
  selector: 'app-current',
  imports: [FormsModule,CommonModule],
  templateUrl: './current.component.html',
  styleUrl: './current.component.scss'
})
export class CurrentComponent {

  constructor( ) {
    this.taskListObj = JSON.parse(localStorage.getItem('tasks') || '[]');
  } 


  taskListObj: TaskList = new TaskList();

  taskObj : ITask = new ITask();

  addTask() {
    this.taskListObj.tasks.push(this.taskObj);
    this.taskObj.id = this.taskListObj.tasks.length;
    this.taskObj = new ITask();
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.taskListObj));
    this.taskListObj= new TaskList();
  }

}
