import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers: any;
  constructor(private http:HttpClient, private router: Router) {
  }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/CUSTOMER-SERVICE/customers').subscribe({
      next: (data) => {
        console.log(data);
        this.customers = data;
      },
      error: (err) => {

      }
    });
  }

  getBills(customer: any) {
    this.router.navigateByUrl("/bills/"+ customer.id);
  }
}
