import { Component, OnInit } from '@angular/core';
import { todo} from "./../../model/todo";
import {v4 as uuidv4} from "uuid";
import { TodoService } from "./../../service/todo.service"
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todotitle:string
  constructor(private todoservice:TodoService ) { }

  ngOnInit(): void {
  }
  handleAdd(){
    const newTodo:todo = {
      id : uuidv4(),
      title:this.todotitle,
      isComplete :false,
      date : new Date()
    }
    this.todoservice.addTodo(newTodo)
    this.todotitle=""
  }


}
