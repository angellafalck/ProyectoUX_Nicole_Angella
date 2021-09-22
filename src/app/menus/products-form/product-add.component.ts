import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "../../common/toastr.service";
import { products } from "src/app/models/pizzeria.model";
import { PizzeriaService } from "src/app/services/pizzeria.service";

@Component({
    templateUrl: './product-add.component.html',
    styles: [`
    em {
        float: right;
        margin-top:15px;
        font-size: small; 
        color:#770D15;
    }
    `]
})
export class ProductAddComponent{
    idUser: number;
    title:any;
    description: any;
    price: any;
    imageUrl:any;
    
    constructor(private pizzeriaService: PizzeriaService, 
        private router: Router,
        private routes: ActivatedRoute,
        private toastrService: ToastrService) {}

    ngOnInit(){
        this.idUser =  +this.routes.snapshot.params["idUser"];
    }

    fnSalvar(dataForm: any)
    {
        let newProduct: products = {
            idProduct: 0,
            title: dataForm.title,
            description: dataForm.description,
            price: dataForm.price,
            imageUrl: dataForm.imageUrl
        };

        console.log(newProduct);

        this.pizzeriaService.postProduct(newProduct).subscribe((data) => {
            this.toastrService.success("Producto","Producto agregado correctamente.");
            this.fnBackToMenu();
        });
    }

    fnBackToMenu(){
        this.router.navigateByUrl(`${this.idUser}/admin/menu`);
    }

    fnHasData(): boolean{
        if(this.title != null ||
            this.description != null || 
            this.price != null || 
            this.imageUrl != null)
            return true;
        else
            return false;
    }
}