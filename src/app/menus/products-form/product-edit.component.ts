import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { products } from "src/app/models/pizzeria.model";
import { PizzeriaService } from "src/app/services/pizzeria.service";
import { ToastrService } from "../../common/toastr.service";

@Component({
    templateUrl: './product-edit.component.html',
    styles: [`
    `]
})
export class ProductEditComponent{
    idUser: number;
    idProduct: number;
    title:any;
    description: any;
    price: any;
    imageUrl:any;
    
    constructor(private pizzeriaService: PizzeriaService, 
        private router: Router,
        private routes: ActivatedRoute,
        private toastrService: ToastrService) {}

    ngOnInit(){
        this.idProduct = +this.routes.snapshot.params["idProduct"];

        this.pizzeriaService
            .getProductById(this.idProduct)
            .subscribe( data => {
                console.log(data[0][0]);
                this.title = data[0][0]?.title;
                this.description = data[0][0]?.description;
                this.price = data[0][0]?.price;
                this.imageUrl = data[0][0]?.imageUrl;
                this.idUser =  +this.routes.snapshot.params["idUser"];
            });

    }

    fnSalvar(dataForm: any)
    {
        let productUpd: products = {
            idProduct: this.idProduct,
            title: dataForm.title,
            description: dataForm.description,
            price: dataForm.price,
            imageUrl: dataForm.imageUrl
        };

        console.log(productUpd);

        this.pizzeriaService.putProduct(productUpd).subscribe((data) => {
            this.toastrService.success("Producto",`Producto actualizado`);
            this.fnBackToMenu();
        });
    }

    fnBackToMenu(){
        this.router.navigateByUrl(`${this.idUser}/admin/menu`);
    }

    fnDelete(){
        
        this.pizzeriaService.deleteProduct(this.idProduct).subscribe((data) => {
            this.toastrService.success("Producto",`Producto eliminado`);
            this.fnBackToMenu();
        })
    }
}