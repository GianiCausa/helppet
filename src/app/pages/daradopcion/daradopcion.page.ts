import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-daradopcion',
  templateUrl: './daradopcion.page.html',
  styleUrls: ['./daradopcion.page.scss'],
  standalone: false,
})
export class DaradopcionPage implements OnInit {

  email: string = "";
  nomMasc: string = "";
  tel!: number;
  edadMasc!: number;
  edad!: number;
  caracMasc: string = "";
  genMasc: string = "";

  constructor(private toastController: ToastController, private router: Router) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      position: position,
    });

    await toast.present();
  }

  esCorreoValido(): boolean {
    return this.email.endsWith('@gmail.com');
  }

  esTelefonoValido(): boolean {
    const telefonoStr = this.tel.toString(); // Convertir a cadena
    return telefonoStr.startsWith('+569') && /^\+569\d{8}$/.test(telefonoStr);
  }

  enviarAdopcion(){
    let correcto = true;

    if(correcto){
      this.presentToast('bottom','Solicitud Enviada')
      this.router.navigate(['/principal'])
    }
  }

  Cancelar(){
    this.router.navigate(['/registro'])
  }

  ngOnInit() {
  }

}
