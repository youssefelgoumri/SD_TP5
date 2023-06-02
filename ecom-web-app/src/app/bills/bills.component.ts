import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {
  bill: any;
  customerId!:number;
  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) {
    this.customerId = route.snapshot.params['customerId'];
  }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/BILLING-SERVICE/bills/'+this.customerId).subscribe({
      next: (data) => {
        this.bill = data;
        console.log(this.bill);

      },
      error: (err) => {

      }
    });
  }

  getProductItems(bill: any) {
    this.router.navigateByUrl("/bills/"+bill.id+"/productItems");
  }
}

