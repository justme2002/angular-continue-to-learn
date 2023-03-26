import { Component, Input } from '@angular/core';

interface ICustomerList {
  id: string,
  name: string
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  constructor() {}

  @Input() public customerList?: ICustomerList[]
  public count?: number = 0
}
