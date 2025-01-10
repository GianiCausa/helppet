import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
  standalone: false,
})
export class ModificarPage implements OnInit {

  constructor(private router: Router) { }

  email: string = "";

  esCorreoValido(): boolean {
    return this.email.endsWith('@gmail.com');
  }

  irPerfil(){
    let correcto = true;

    if(correcto){
      this.router.navigate(['/perfil'])
    }
  }

  ngOnInit() {
  }

}
