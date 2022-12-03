import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal3Component } from '../modal3/modal3.component';

@Component({
  selector: 'app-perfis-novo',
  templateUrl: './perfis-novo.component.html',
  styleUrls: ['./perfis-novo.component.scss']
})
export class PerfisNovoComponent implements OnInit {

  constructor(private modalcontroler:ModalController) { }
  async openModal3(){
    const modal = await this.modalcontroler.create({
      component: Modal3Component,
      cssClass: 'modal3'
    });
    await modal.present();
    const res = await modal.onDidDismiss();
  }

  ngOnInit(): void {
  }

}
