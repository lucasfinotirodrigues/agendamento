import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'solicitar', component: SolicitarComponent},
  { path: 'visualizar', component: VisualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
