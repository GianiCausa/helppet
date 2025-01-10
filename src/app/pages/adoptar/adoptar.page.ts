import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adoptar',
  templateUrl: './adoptar.page.html',
  styleUrls: ['./adoptar.page.scss'],
  standalone: false,
})
export class AdoptarPage implements OnInit {

  email: string = "";
  nombre: string = "";
  tel!: number;

  constructor(private router: Router, private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
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

  irInfo(){
    let correcto = true;

    if(correcto){
      this.router.navigate(['/info'])
    }
  }

  irAgendar(){
    let correcto = true;

    if(/\d/.test(this.nombre)){
      this.presentToast('bottom','El nombre no puede ir con numeros')
      correcto = false;
    }

    if(correcto){
      this.router.navigate(['/agendar'])
    }
  }

  ngOnInit() {
  }

}
