import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../service/todo.service'
import {todo} from "./../../model/todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:todo[];
  constructor(private TodoService:TodoService) { }

  ngOnInit(): void {
    this.TodoService.getToDo().subscribe((todos)=>{this.todos = todos})
  }
  changeTodoStatus(todo:todo){
    this.TodoService.changeStatus(todo) 
  }
  deleteTodo(todo:todo){
  
    this.TodoService.deleteTodo(todo) 
  }

}
