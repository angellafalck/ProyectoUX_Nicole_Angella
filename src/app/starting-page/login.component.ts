import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { users } from "../models/pizzeria.model";
import { PizzeriaService } from "../services/pizzeria.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    /*template: `
        <h1>Log In</h1>
        <hr/>
        <h1>Prueba de Users</h1>
        <div *ngFor = "let user of usersList[0]">
            <h6>IdUser: {{user.idUser}}</h6>
            <h6>Email: {{user.email}}</h6>
            <h6>Name: {{user.name}}</h6>
            <h6>Password: {{user?.password}}</h6>
            <h6>Role: {{user?.idRole}}</h6>
        </div>
    `,*/
    styles: [ `

    ` ]
})
export class LoginComponent{
    usersList: users[][] = [];
    email: any;
    name: any;
    password:any;
    user: users;

    constructor(private pizzeriaService: PizzeriaService, 
        private router: Router,
        private toastrService: ToastrService){
    }
    /*
    ngOnInit(){
        this.pizzeriaService.getUsers().subscribe(data => {
            this.usersList = data;
            console.log(this.usersList);
        });

    }*/

    fnLogin(data: any){
        this.pizzeriaService.getUserByEmail(this.email).subscribe( data => {
            this.user = data;
            this.fnValidatePassword();
        });
    }

    fnValidatePassword()
    {
        if(this.user[0].length == 0){
            this.toastrService.error("Error","Correo no es valido, inténtelo nuevamente o regístrese");
        }
        else if(this.user[0][0]?.password == this.password){
            this.toastrService.success("Registro","Registro exitoso");
            if (this.user[0][0].idRole == 2)
                this.router.navigateByUrl(`${this.user[0][0].idUser}/menu`);
            else if(this.user[0][0].idRole == 1)
                this.router.navigateByUrl(`${this.user[0][0].idUser}/admin/menu`);
        }
        else {
            console.log(this.user);
            this.toastrService.error("Error","Contraseña incorrecta, inténtelo nuevamente");
        }
    }
}