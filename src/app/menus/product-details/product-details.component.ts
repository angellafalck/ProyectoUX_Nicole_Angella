import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "src/app/models/pizzeria.model";
import { PizzeriaService } from "src/app/services/pizzeria.service";

@Component({
    templateUrl: "./product-details.component.html"
})

export class ProductDetailComponent{
    product?: products;

    constructor(private pizzeriaService: PizzeriaService, 
        private routes:ActivatedRoute)
    {   }

    ngOnInit(){
        this.pizzeriaService
            .getProductById(this.routes.snapshot.params["idProduct"])
            .subscribe( data => {
            this.product = data;
            });
    }

}