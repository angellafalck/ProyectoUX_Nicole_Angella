import { Component, NgModule } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { products, users } from "../models/pizzeria.model";
import { PizzeriaService } from "../services/pizzeria.service";


@Component({
    templateUrl: './menu-admin.component.html'
})
export class MenuAdminComponent{
    productsList: products[][] = [];
    user: users;

    constructor(private pizzeriaService: PizzeriaService, 
        private router: Router,
        private routes: ActivatedRoute)
        {}

    ngOnInit(){
        /*
        this.pizzeriaService.getUserByEmail(this.routes.snapshot.params["email"])
            .subscribe( data => {
                this.user = data;
            });

        this.pizzeriaService.getProducts().subscribe(data => {
            this.productsList = data;
            console.log(this.productsList);
            console.log(this.user);
        });*/
    }


}