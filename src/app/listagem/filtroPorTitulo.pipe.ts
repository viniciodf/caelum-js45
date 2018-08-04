import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "../foto/foto.model";

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(listaFotos: Foto[], textoDigitado:string) {
        return listaFotos.filter(elemento => elemento.titulo.toLowerCase().includes(textoDigitado.toLowerCase()));
    }


}