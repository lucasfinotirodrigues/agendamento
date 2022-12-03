import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal2Component } from '../modal2/modal2.component';

@Component({
  selector: 'app-solicitante-novo',
  templateUrl: './solicitante-novo.component.html',
  styleUrls: ['./solicitante-novo.component.scss']
})
export class SolicitanteNovoComponent implements OnInit {

  constructor(private modalcontroler:ModalController) { }
  async openModal2(){
    const modal = await this.modalcontroler.create({
      component: Modal2Component,
      cssClass: 'modal1'
    });
    await modal.present();
    const res = await modal.onDidDismiss();
  }

  ngOnInit(): void {
  } 

}
