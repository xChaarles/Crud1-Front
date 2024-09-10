import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import CustomerListComponent from '../customer-list/customer-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: "app-customer-add",
  standalone: true,
  imports: [FormsModule, CustomerListComponent],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export default class CustomerAddComponent implements OnInit {

  customer: Customer = { id: 0, firstname: '', lastname: '', email: '' };

  id: number = 0;
  firstName : string = "";
  lastName : string = "";
  email : string = "";

  constructor(private customerService : CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router ){

  }

  ngOnInit(): void {
  }


  addCustomer(){
    let customer = new Customer(this.id, this.firstName, this.lastName, this.email);
    this.customerService.createCustomer(customer).subscribe(
      res => console.log(customer)
    );
  }

}
