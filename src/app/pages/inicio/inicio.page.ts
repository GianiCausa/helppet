import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  email: string = "";
  contra: string = "";

  constructor(private alertController: AlertController, private router: Router) { }

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

  esContraValida(): boolean {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=|\\{}[\]:;"'<>,.?/~`]).{8,}$/;
    return regex.test(this.contra);
  }
  
  validarInicio(){
    let correcto = true;

    if(correcto){
      this.presentAlert("Bienvenido","Esperamos que disfrute la experiencia en HelpPets")
      this.router.navigate(['/principal'])
    }
  }

  IrRegistro(){
    let correcto = true;

    if(correcto){
      this.router.navigate(['/registro'])
    }
  }
  
  limpiarRegistro(){
    this.email = "";
    this.contra = "";
  }

  ngOnInit() {
  }

}
