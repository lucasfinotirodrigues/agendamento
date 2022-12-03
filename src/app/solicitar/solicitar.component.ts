import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Modal1Component } from '../modal1/modal1.component';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.scss']
})
export class SolicitarComponent implements OnInit {

  constructor(private modalcontroler:ModalController) { }

  async openModal1(){
    const modal = await this.modalcontroler.create({
      component: Modal1Component, 
      cssClass: 'modal1'
    });
    await modal.present();
    const res = await modal.onDidDismiss();
  }
    ngOnInit(): void {
  } 

}
