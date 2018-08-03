import { Component, Input } from "@angular/core";
import { Foto } from "../foto/foto.model";

@Component({
    selector: 'card',
    templateUrl: './card.component.html'
})
export class CardComponent {
    @Input('foto') fotoCard: Foto;

}