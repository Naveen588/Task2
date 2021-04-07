import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/providers/todos';
import { TodoService } from 'src/app/providers/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos?:Todos[];

  constructor(private _todoService:TodoService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    this._todoService.todoData().subscribe(
      (res)=>{
        this.todos=res;
      }
    )
  }

}
