import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: false,
})
export class PrincipalPage implements OnInit {

  card: any = [
    {
      id:1,
      nombreMasc: 'Guaton',
      especie: 'Conejo',
      genero: 'Macho',
      img: '/assets/icon/conejo.jpg'
    },
    {
      id:2,
      nombreMasc: 'Colo Colo',
      especie: 'Gato',
      genero: 'Macho',
      img: '/assets/icon/gato.jpg'
    },
    {
      id:3,
      nombreMasc: 'Benji',
      especie: 'Perro',
      genero: 'Macho',
      img: '/assets/icon/perro1.webp'
    },
  ]

  constructor(private router: Router) { }

  irInfo(card: any){
    let navigationextras: NavigationExtras = {
      state: {
        card: card, // Pasamos el objeto card completo
      },
    };

    this.router.navigate(['/info'], navigationextras)
  }
  ngOnInit() {
  }

}
