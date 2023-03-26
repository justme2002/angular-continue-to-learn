import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interfaces/ITodo';
import { ITodoStyle } from 'src/app/interfaces/ITodoStyle';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  constructor(private httpClient?: HttpClient) {}

  public todos?: ITodo[]

  public getData() { 
    this.httpClient?.get("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: "10"
      }
    })
                    .subscribe((data: Object) => {
                      this.todos = data as ITodo[]
                    })
  }

  ngOnInit(): void {
    this.getData()
  }

  ngOnDestroy(): void {
    this.todos = []
  }
}
