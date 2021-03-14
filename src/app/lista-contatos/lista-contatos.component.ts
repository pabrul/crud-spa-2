import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato.model';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styles: []
})
export class ListaContatosComponent implements OnInit {

  contatos: Contato[] = [];

  constructor(
    private _contatoService: ContatoService,

  ) { }

  ngOnInit() {
    this._contatoService.retornarTodos().subscribe(
      c => this.contatos = c,
      error => alert('Erro ao carregar a lista')
    )
  }

  get filtrarContatos() {
    return this.contatos.filter( x => x.id > 0);
  }

  isHomeRoute() {
    return this.router.url === '/';
  }
}


// if(document.querySelector('p#contatos').innerText == "contatos"){
// 	    document.querySelector('section.banner').classList.add("hidden");
// 	}   
