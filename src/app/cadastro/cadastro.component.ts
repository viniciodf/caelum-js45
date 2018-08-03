import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto.model';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListagemComponent } from '../listagem/listagem.component';
import { Mensagem, MensagemTipo } from '../mensagem/mensagem.model';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  titulo = 'Cadastro de Foto';
  foto = new Foto();
  mensagem = new Mensagem();

  constructor(private fotoService: FotoService, private routeAtiva:ActivatedRoute, private roteador:Router) {}

  ngOnInit() {
    let fotoId = this.routeAtiva.snapshot.params.id;
    if(fotoId){
      this.titulo = 'Edição de Foto';
      this.fotoService.buscar(fotoId).subscribe(
        (foto) => {
          this.foto = foto;
        }
        , (erro) => {
          console.log(erro);
        }
      );
    }
  }

  salvar() {
    if(this.foto._id){
      this.fotoService.atualizar(this.foto).subscribe(
        (sucesso) => {
          this.mensagem.conteudo = this.foto.titulo + ' alterada com sucesso!';
          this.mensagem.tipo = MensagemTipo.sucess;

          setTimeout(
            () => this.roteador.navigate([ListagemComponent])
            , 2000
          )
          console.log(sucesso);
        }
        , (erro) => {
          console.log(erro);
        }
      );
    } else {
      this.fotoService.cadastrar(this.foto).subscribe(
        (sucesso) => {
          this.mensagem.conteudo = this.foto.titulo + ' salva com sucesso!';
          this.mensagem.tipo = MensagemTipo.sucess;
          this.foto = new Foto();
          console.log(sucesso);
        }
        , (erro) => {
          this.mensagem.conteudo = this.foto.titulo + ' erro ao salvar!';
          this.mensagem.tipo = MensagemTipo.danger;
          console.log(erro);
        }
      );

    }

  }

}
