import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal4Component } from '../modal4/modal4.component';

@Component({
  selector: 'app-espacos-novo',
  templateUrl: './espacos-novo.component.html',
  styleUrls: ['./espacos-novo.component.scss']
})
export class EspacosNovoComponent implements OnInit {

  constructor(private modalcontroler:ModalController) {}
    async openModal4(){
      const modal = await this.modalcontroler.create({
        component: Modal4Component,
        cssClass: 'modal4'
      });
      await modal.present();
      const res = await modal.onDidDismiss();
    }
    ngOnInit(): void {
  }

}
