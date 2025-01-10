import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
  standalone: false,
})
export class AgendarPage implements OnInit {

  email: string = "";
  nombre: string = "";
  tel!: number;
  fecha: string = "";
  edad!: number;

  constructor(private router: Router, private toastController: ToastController, private alertController: AlertController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      position: position,
    });

    await toast.present();
  }

  async presentAlert(titulo:string, mensaje:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  esCorreoValido(): boolean {
    return this.email.endsWith('@gmail.com');
  }

  esTelefonoValido(): boolean {
    const telefonoStr = this.tel.toString(); 
    return telefonoStr.startsWith('+569') && /^\+569\d{8}$/.test(telefonoStr);
  }

  fechaValida(): boolean {
    const fechaActual = new Date(); 
    fechaActual.setHours(0, 0, 0, 0); 

    const [dia, mes, anio] = this.fecha.split('/').map(Number);

    const fechaIngresada = new Date(anio, mes - 1, dia); 
    fechaIngresada.setHours(0, 0, 0, 0); 

    return fechaIngresada.getTime() >= fechaActual.getTime();
  }

  irInfo(){
    let correcto = true;

    if(correcto){
      this.router.navigate(['/info'])
    }
  }

  irPrincipal(){
    let correcto = true;

    if(/\d/.test(this.nombre)){
      this.presentToast('bottom','El nombre no puede ir con numeros')
      correcto = false;
    }
    if(this.edad < 18){
      this.presentToast('bottom','No cumple con la mayoria de edad')
      correcto = false;
    }

    if (!this.fechaValida()) {
      this.presentAlert("Error en la fecha","La fecha no puede ser una fecha pasada al dia actual");
      correcto = false;
    }

    if(correcto){
      this.router.navigate(['/principal'])
    }
  }

  ngOnInit() {
  }

}
