import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioContatoComponent } from './formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { DeleteContatoComponent } from './delete-contato/delete-contato.component';

const routes: Routes = [
  { path: '', component: ListaContatosComponent },
  { path: 'contatos', component: ListaContatosComponent },
  { path: 'contato/novo', component: FormularioContatoComponent },
  { path: 'contato/:id/editar', component: FormularioContatoComponent },
  { path: 'contato/:id/deletar', component: DeleteContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }