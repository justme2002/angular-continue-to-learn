import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core'
import { CustomerListComponent } from '../customer-list/customer-list.component';

interface IHobby {
  id: string,
  hobby: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  @ViewChild(CustomerListComponent) public customerListComponent?: CustomerListComponent
  public countInParent?: number = this.customerListComponent?.count

  public customerList = [
    {
      id: "1",
      name: "NVA"
    },
    {
      id: "2",
      name: "NVB"
    },
    {
      id: "3",
      name: "NVC"
    }
  ]
  @Input() count: string = ""
  @Output() countChange: EventEmitter<string> = new EventEmitter<string>()

  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {

  }

  increment(event: string) {
    this.countChange.emit(this.count = event)
  }

  submit() {
    alert(this.count)
  }
}
