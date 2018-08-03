import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'caelumpic-mensagem',
  template: '<p class="alert alert-{{tipo}}" role="alert">{{conteudo}}</p>',
  styles: []
})
export class MensagemComponent implements OnInit {

  @Input() tipo = 'primary'
  @Input() conteudo = '';

  constructor() { }

  ngOnInit() {
  }

}
