import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { SolicitantesComponent } from './solicitantes/solicitantes.component';
import { SolicitanteNovoComponent } from './solicitante-novo/solicitante-novo.component';
import { PerfisComponent } from './perfis/perfis.component';
import { PerfisNovoComponent } from './perfis-novo/perfis-novo.component';
import { EspacosComponent } from './espacos/espacos.component';
import { EspacosNovoComponent } from './espacos-novo/espacos-novo.component';
import { RouteReuseStrategy } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Modal1Component } from './modal1/modal1.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolicitarComponent,
    VisualizarComponent,
    SolicitacoesComponent,
    SolicitantesComponent,
    SolicitanteNovoComponent,
    PerfisComponent,
    PerfisNovoComponent,
    EspacosComponent,
    EspacosNovoComponent,
    Modal1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
