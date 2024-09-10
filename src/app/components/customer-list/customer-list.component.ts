import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Subscriber } from 'rxjs';
import CustomerAddComponent from '../customer-add/customer-add.component';
import { RouterModule } from '@angular/router';
import { Customer } from '../customer';

@Component({
  standalone: true,
  imports: [CustomerAddComponent,RouterModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export default class CustomerListComponent implements OnInit {

  customers : Customer [] = [];

  constructor(private customerService : CustomerService){}

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers(){
    this.customerService.getCustomerList().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers)
      } 
    );
  }

  deleteCustomer(id : number){
    console.log(id)
    this.customerService.deleteCustomerById(id).subscribe(
      () => this.listCustomers()
    );
  }

}
