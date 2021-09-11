import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { users } from "../models/pizzeria.model";
import { PizzeriaService } from "../services/pizzeria.service";

@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styles: [ `

    ` ]
})
export class SigninComponent{
    email: any;
    name: any;
    password:any;
    user: users;
    userLength: number = 0;

    constructor(private pizzeriaService: PizzeriaService, private router: Router,
        private toastrService: ToastrService){
    }

    fnSigin(dataForm: any)
    {
        this.pizzeriaService.getUserByEmail(this.email).subscribe( data => {
            this.user = data;
            this.fnValidateEmail(dataForm);
        });
    }

    fnValidateEmail(data: any)
    {
        if(this.user[0].length == 0) //validar que no exista el correo
        {
            this.toastrService.success("Sign In","Cuenta creada exitosamente");
            console.log(data);
            try{
                this.pizzeriaService.postUser(data).subscribe((response) => {
                    console.log("entra");
                    this.router.navigate(["/menu"]);
                });
            } catch(HttpErrorResponse){
                console.log("erroooor");
            }
        } 
        else
        {
            this.toastrService.error("Error","Correo ya pertenece a una cuenta existente");
        }
    }

}