import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements OnInit {

  id: string = '';
  firstname: string = "";
  lastname : string = "";
  email: string = "";

  ngOnInit(): void {
    
  }
}
