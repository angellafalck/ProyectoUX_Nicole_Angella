import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "../../common/toastr.service";
import { products } from "src/app/models/pizzeria.model";
import { PizzeriaService } from "src/app/services/pizzeria.service";

@Component({
    templateUrl: './product-add.component.html',
    styles: [`
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
        /*this.pizzeriaService.postReview(newReview).subscribe((data) => {
            this.reviews.push(data[0][0]);
            this.toastrService.success("Reseña","Reseña agregada correctamente");
            this.fnBackToMenu();
        });*/
    }

    fnBackToMenu(){
        this.router.navigateByUrl(`${this.idUser}/admin/menu`);
    }
}