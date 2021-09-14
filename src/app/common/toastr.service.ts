import { Injectable } from "@angular/core";

declare let toastr;

@Injectable()
export class ToastrService{
    success(mensaje: string, titulo: string){
        toastr.success(mensaje,titulo);
    }
    error(mensaje: string, titulo: string){
        toastr.error(mensaje,titulo);
    }
    information(mensaje: string, titulo: string){
        toastr.information(mensaje,titulo);
    }
    warning(mensaje: string, titulo: string){
        toastr.console.warn(mensaje,titulo);
    }
}