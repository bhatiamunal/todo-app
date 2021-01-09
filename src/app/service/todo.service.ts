import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {todo} from "./../model/todo"
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:todo[];
  constructor() {
    this.todos = [
      {
      id:"101",
      title:"Complete Angular",
      isComplete:true,
      date : new Date()
    },
    {
      id:"102",
      title:"Complete React",
      isComplete:false,
      date : new Date()
    },
    
    {
      id:"103",
      title:"Complete Node",
      isComplete:false,
      date : new Date()
    }
  ]

   }
   getToDo(){
     return of(this.todos)
   }
   addTodo(todo:todo){
     this.todos.push(todo) 
   }
   changeStatus(todo:todo){
     this.todos.map(singleToDo=>{
       if(singleToDo.id==todo.id){
         todo.isComplete = !todo.isComplete
       }
     })
   }
   deleteTodo(todo:todo){
   
     const indexOfTodo = this.todos.findIndex((currentobj)=>currentobj.id==todo.id)
     this.todos.splice(indexOfTodo,1)
     console.log(this.todos)

    }
}
