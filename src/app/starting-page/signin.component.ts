import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { users } from "../models/pizzeria.model";
import { PizzeriaService } from "../services/pizzeria.service";

@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styles: [ `
    em {
        float: right;
        margin-top:15px;
        font-size: small; 
        color:#770D15;
    }
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

    fnValidateEmail(dataForm: any)
    {
        if(this.user[0].length == 0) //validar que no exista el correo
        {
            this.toastrService.success("Sign In","Cuenta creada exitosamente");
            
            this.pizzeriaService.postUser(dataForm).subscribe((data) => {
                this.user = data;
                console.log(this.user);
                this.router.navigateByUrl(`${this.user[0][0].idUser}/menu`);
            });
            
        } 
        else
        {
            this.toastrService.error("Error","Correo ya pertenece a una cuenta existente");
        }
    }

}