import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-delete-contato',
  templateUrl: './delete-contato.component.html',
  styles: []
})
export class DeleteContatoComponent implements OnInit {

  contato: Contato;

  constructor(
    private _contatoService: ContatoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.contato = new Contato();

    this.route.paramMap.pipe(
      switchMap(params => this._contatoService.buscarPorId(+params.get("id")))
    )
    .subscribe(
      (c)=>{
        this.contato = c;
      },
      (error) => alert('Ocorreu um erro no servidor, tente novamente.')
    )
  }

  deletarContato() {
    this._contatoService.deletar(this.contato.id).subscribe(
      () => this.router.navigateByUrl("contatos"),
      () => alert("Erro ao tentar excluir")
    )
  }

}