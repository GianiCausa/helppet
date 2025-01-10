import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {
  
  email: string = "";
  contra: string = "";
  confircontra: string = "";

  constructor(private router: Router) { }

  esCorreoValido(): boolean {
    return this.email.endsWith('@gmail.com');
  }

  esContraValida(): boolean {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=|\\{}[\]:;"'<>,.?/~`]).{8,}$/;
    return regex.test(this.contra);
  }

  limpiarRegistro(){
    this.email = "";
    this.contra = "";
    this.confircontra = "";
  }

  validarRegistro(){
    let correcto = true;

    if(correcto){
      this.router.navigate(['/inicio']);

    }

  }

  ngOnInit() {
  }

}
