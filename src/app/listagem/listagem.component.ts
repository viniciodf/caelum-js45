import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from '../foto/foto.model';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  titulo = "CaelumPic - Vinicio";
  listaFotos: Foto[] = [];

  constructor(private fotoService: FotoService) {
    this.fotoService.listar().subscribe((fotosApi) => {
      this.listaFotos = fotosApi;
    });
  }

  ngOnInit() {
  
  }

  removeCard(foto:Foto){
    this.fotoService.deletar(foto).subscribe(
      (sucesso) => {

        this.listaFotos = this.listaFotos.filter(index => index != foto);
  
        console.log(sucesso);
      }
      ,(erro) => {
        console.log(erro);
      }
    );
  }

}
