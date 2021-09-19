import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { users } from "../models/pizzeria.model";
import { PizzeriaService } from "../services/pizzeria.service";
import {addElement, getElements} from "src/app/menus/detalle.js";

@Component({
    selector: 'orderdetailss',
    templateUrl: './orderdetailss.component.html',
    styles: [ `

    ` ]
})
export class OrderDetailssComponent{
    user: users;
    name:any;
    delivery:any;
    number: any;
    data:any;
    idUser: number;

    constructor(private pizzeriaService: PizzeriaService, 
        private router: Router,
        private routes: ActivatedRoute,
        private toastrService: ToastrService) 
    {}

    ngOnInit(){
        this.idUser =  +this.routes.snapshot.params["idUser"];
    }

    fnEnviar(dataForm: any)
    {
        //enviar correo y vaciar this.order
        console.log("Enviar orden");
          //this.data=JSON.stringify(fnTotalStringtoEmail());
        console.log(getElements());
        const object ={Nombre: dataForm.name, Delivery: dataForm.delivery, Telefono: dataForm.number, Pizza: getElements()};
  
        this.toastrService.success("enviada", `Orden`); 
        this.pizzeriaService.sendEmail("http://localhost:3000/api/sendmail", object).subscribe( (data) => {
            console.log(`👏 ${object}  and mail has been sent`);
            //this.toastrService.success("enviada", `Orden`);  
            this.pizzeriaService.updateOrder([]);
            this.router.navigateByUrl(`${this.idUser}/menu`);  
        });
         
    }



}