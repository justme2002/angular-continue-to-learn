import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ITodo } from 'src/app/interfaces/ITodo';
import { ITodoStyle } from 'src/app/interfaces/ITodoStyle';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  constructor(private httpClient?: HttpClient) {}

  @Input() public todos?: ITodo[]

  handleCheckedTodo(id?: string) {
    console.log(id)
    const newTodos = this.todos?.map((todo: ITodo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed
        console.log(todo.completed)
      }
      return todo
    })
    this.todos = newTodos
  }

  deleteTodo(id?: string) {
    this.httpClient?.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    }).subscribe()
    const newTodos = this.todos?.filter(todo => {
      return todo.id !== id
    })
    this.todos = newTodos
  }
}
