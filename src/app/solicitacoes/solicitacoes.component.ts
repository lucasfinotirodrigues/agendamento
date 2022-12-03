import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAceitarComponent } from '../modal-aceitar/modal-aceitar.component';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {

  constructor(private modalcontroler:ModalController) { }
  async openModal_aceitar(){
    const modal = await this.modalcontroler.create({
      component: ModalAceitarComponent, 
      cssClass: 'modal_aceitar'
    });
    await modal.present();
    const res = await modal.onDidDismiss();

  }

  ngOnInit(): void {
  }

}
