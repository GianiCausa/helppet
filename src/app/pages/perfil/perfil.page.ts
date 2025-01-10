import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {

    email: string = 'Juan@gmail.com';

  constructor(private router: Router) { 
  }

  irModificar(){
    let correcto = true;

    if(correcto){
      this.router.navigate(['/modificar'])
    }
  }

  ngOnInit() {
  }

}
