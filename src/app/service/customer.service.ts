import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../components/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private api: string = 'http://localhost:8080/api/customers';

  constructor(private http:HttpClient) {}

  //Obtener customers
  getCustomerList(): Observable<Customer []>{
    return this.http.get<Customer[]>(this.api);
  }
  
  //Crear customer
  createCustomer(customer : Customer):Observable<Customer>{
    return this.http.post<Customer>(this.api, customer); 
  }

  //Obtener un customer
  getCustomerById(id : number):Observable<Customer>{
    return this.http.get<Customer>(this.api+'/'+id);
  }

  //eliminar customer
  deleteCustomerById(id : number):Observable<any>{
    return this.http.delete(this.api+'/'+id,);
  }

  //Actualizar customer
  updateCustomer(customer : Customer, id : number):Observable<Customer>{
    return this.http.put<Customer>(this.api, customer);
  }


}
