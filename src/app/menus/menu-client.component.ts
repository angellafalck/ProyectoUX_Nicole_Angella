import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { products } from "../models/pizzeria.model";
import { PizzeriaService } from "../services/pizzeria.service";

@Component({
    template: `
        <h1>Menú</h1>
        <hr/>
        <div *ngFor = "let product of productsList[0]">
            <h6>{{product.idProduct}}</h6>
            <h6>{{product.title}}</h6>
            <h6>{{product.description}}</h6>
            <h6>{{product?.price}}</h6>
            <h6>{{product?.imageUrl}}</h6>
        </div>
    `
})
export class MenuClientComponent{
    productsList: products[][] = [];

    constructor(private pizzeriaService: PizzeriaService, private router: Router){
    }

    ngOnInit(){
        this.pizzeriaService.getProducts().subscribe(data => {
            this.productsList = data;
            console.log(this.productsList);
        });

    }


}