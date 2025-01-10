import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
  standalone: false,
})
export class AdministracionPage implements OnInit {

  nomMasc: string = "";
  espMasc: string = "";
  genMasc: string = "";

  constructor(private router: Router, private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      position: position,
    });

    await toast.present();
  }

  irPrincipal(){
    let correcto = true;

    if(/\d/.test(this.nomMasc)){
      this.presentToast('bottom','El nombre no puede ir con numeros')
      correcto = false;
    }

    if(correcto){
      this.router.navigate(['/principal'])
    }
  }

  irInicio(){
    let correcto = true;

    if(correcto){
      this.router.navigate(['/inicio'])
    }
  }
  ngOnInit() {
  }

}
