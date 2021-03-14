import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styles: []
})
export class FormularioContatoComponent implements OnInit {

  contatoForm: FormGroup;
  submittingForm: boolean = false;
  currentAction: string;
  contato: Contato;
  pageTitle: string;

  constructor(
    private _contatoService: ContatoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.contato = new Contato();
    this.setCurrentAction();    
  }

  ngAfterContentChecked(){
    this.atualizarPageTitle();
  }

  private setCurrentAction() {   
    if(this.route.snapshot.url[1].path == "novo"){
      this.currentAction = "new";    
    }
    else
    {
      this.currentAction = "edit";
      this.carregarContato();          
    }
  }
  
  submitForm(contatoForm) {
    console.log(contatoForm)
    this.submittingForm = true;

    if (this.currentAction == "new") {
      this.criarContato(contatoForm);
    }
    else {
      this.atualizarContato(contatoForm);
    }
  }

   private carregarContato() {
    if(this.currentAction == "edit"){
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
  }
  
  private criarContato(contatoForm) {
    const contato: Contato = Object.assign(new Contato(), contatoForm.value);    

     this._contatoService.gravar(contato)
       .subscribe(
          () => this.cadastroGravadoComSucesso(),
          error => this.erroAoGravarContato(error)
       )
  }
 
  private atualizarContato(contatoForm) {
    const contato: Contato = Object.assign(new Contato(), contatoForm.value);    

    this._contatoService.atualizar(contato)
      .subscribe(
        contato => this.cadastroGravadoComSucesso(),
        error => this.erroAoGravarContato(error)
      )
  }

  private cadastroGravadoComSucesso() {
    this.router.navigateByUrl("contatos")
  }

  private erroAoGravarContato(error) {
    alert(error.body.error);
  }

  private atualizarPageTitle() {
    if(this.currentAction == "new")
      this.pageTitle = "Cadastro de Novo Contato";
    else{
      const contatoNome = this.contato.nome || ""
      this.pageTitle = "Editando Contato: " + contatoNome;
    }
  }
}