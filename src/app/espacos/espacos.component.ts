import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDeletarEspacoComponent } from '../modal-deletar-espaco/modal-deletar-espaco.component';

@Component({
  selector: 'app-espacos',
  templateUrl: './espacos.component.html',
  styleUrls: ['./espacos.component.scss']
})
export class EspacosComponent implements OnInit {

  constructor(private modalcontroler:ModalController) { }
  async openModal_deletar_espaco(){
    const modal = await this.modalcontroler.create({
      component: ModalDeletarEspacoComponent,
      cssClass: 'modal_deletar_espaco'
    });
    await modal.present();
    const res = await modal.onDidDismiss();
  }


  ngOnInit(): void {
  }

}
