import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [FormsModule, CustomerListComponent],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements OnInit {

  id: number = 0;
  firstName: string = "";
  lastName : string = "";
  email: string = "";

  constructor(private customerService : CustomerService){

  }

  ngOnInit(): void {
    
  }

  addCustomer(){
    let customer = new Customer(this.id, this.firstName, this.lastName, this.email);
    console.log(customer)
    this.customerService.createCustomer(customer).subscribe(
      res => console.log(res),
    );
  }



}
