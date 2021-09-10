import { Component, NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { products } from "../models/pizzeria.model";
import { PizzeriaService } from "../services/pizzeria.service";


@Component({
    templateUrl: './menu-client.component.html'
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