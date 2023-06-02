import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {
  id!:number;
  productItems : any;
  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/BILLING-SERVICE/bills/'+this.id+"/productItems").subscribe({
      next: (data) => {
        this.productItems = data;
        console.log(this.productItems);
        console.log(this.id);

      },
      error: (err) => {

      }
    });
  }
}
