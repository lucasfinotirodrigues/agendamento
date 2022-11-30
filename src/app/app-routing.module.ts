import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { SolicitantesComponent } from './solicitantes/solicitantes.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'solicitar', component: SolicitarComponent},
  { path: 'visualizar', component: VisualizarComponent},
  { path: 'solicitacoes', component: SolicitacoesComponent},
  { path: 'solicitantes', component: SolicitantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
