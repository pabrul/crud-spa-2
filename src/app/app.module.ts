import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioContatoComponent } from './formulario-contato/formulario-contato.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api"
import { InMemoryDatabase } from "./in-memory-database";
import { DeleteContatoComponent } from './delete-contato/delete-contato.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioContatoComponent,
    ListaContatosComponent,
    DeleteContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }