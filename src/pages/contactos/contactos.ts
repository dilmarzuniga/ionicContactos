import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
// importar servicio de datos de contactos
import { ContactoService } from '../../app/contacto.service';
import { Contacto } from '../../app/contacto';

@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
  providers: [ContactoService]
})
export class ContactosPage {

  contactos: Contacto[];
  contacto: Contacto;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, private contactoService: ContactoService) {

  }

  // al entrar en la vista ejecutamos el metodo getContactos
  ionViewDidEnter() {
    this.getContactos();
  }
  // retorna la lista del contacto desde el servidor de datos
  getContactos(): void {
    this.contactoService.getContactos().then(contactos => this.contactos = contactos);
  }

}
