import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { products, users } from "../models/pizzeria.model";

@Injectable()
export class PizzeriaService
{
    constructor(private http: HttpClient){
    }

    getUsers(): Observable<users[][]>{
        return this.http.get<users[][]>("http://localhost:3000/api/users");
    }

    getUserByEmail(email: string): Observable<users>{
        return this.http.get<users>(`http://localhost:3000/api/users/${email}`);
    }

    getUserById(idUser: number): Observable<users>{
        return this.http.get<users>(`http://localhost:3000/api/user/${idUser}`);
    }

    getProducts(): Observable<products[][]>{
        return this.http.get<products[][]>("http://localhost:3000/api/products");
    }

    getProductById(idProduct: number): Observable<products>{
        return this.http.get<products>(`http://localhost:3000/api/products/${idProduct}`);
    }

    postUser(user:users): Observable<users>{
        const options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
        return this.http.post<users>("http://localhost:3000/api/users", user, options);
    }


}