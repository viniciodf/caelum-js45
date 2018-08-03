import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Foto } from "./foto.model";
import { $$ } from "protractor";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class FotoService {
    
    private url = 'http://localhost:3000/v1/fotos/';

    constructor(private conexaoAPI: HttpClient) {

    }

    listar(): Observable<Foto[]> {
        return this.conexaoAPI.get<Foto[]>(this.url);
    }

    cadastrar(foto:Foto) {
        return this.conexaoAPI.post(this.url, foto);
    }

    deletar(foto:Foto) {
        return this.conexaoAPI.delete(this.url + foto._id);
    }

    atualizar(foto:Foto) {
        return this.conexaoAPI.put(this.url + foto._id, foto);
    }

    buscar(id:number) : Observable<Foto> {
        return this.conexaoAPI.get<Foto>(this.url + id);
    }
}