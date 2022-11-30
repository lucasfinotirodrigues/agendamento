import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { SolicitantesComponent } from './solicitantes/solicitantes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolicitarComponent,
    VisualizarComponent,
    SolicitacoesComponent,
    SolicitantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
