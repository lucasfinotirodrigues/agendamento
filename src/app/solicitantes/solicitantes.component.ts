import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDeletarComponent } from '../modal-deletar/modal-deletar.component';

@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.scss']
})
export class SolicitantesComponent implements OnInit {

  constructor(private modalcontroler:ModalController) { }
  async openModal_deletar(){
    const modal = await this.modalcontroler.create({
      component: ModalDeletarComponent,
      cssClass: 'modal_deletar'
    });
    await modal.present();
    const res = await modal.onDidDismiss();
  }

  ngOnInit(): void {
  }

}
