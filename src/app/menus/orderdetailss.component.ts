import { Component } from "@angular/core";
import { Router } from "@angular/router";
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

    constructor(private pizzeriaService: PizzeriaService, private router: Router,
        private toastrService: ToastrService){
    }

    fnSigin(dataForm: any)
    {
          //enviar correo y vaciar this.order
          console.log("Enviar orden");
          //this.data=JSON.stringify(fnTotalStringtoEmail());
        console.log(getElements());
         const object ={Nombre: dataForm.name, Delivery: dataForm.delivery, Telefono: dataForm.number, Pizza: getElements()};
  
            this.pizzeriaService.sendEmail("http://localhost:3000/api/sendmail", object).subscribe();
                console.log(
                  `👏 ${object}  and mail has been sent`);
            
                
    }



}