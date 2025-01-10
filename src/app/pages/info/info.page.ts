import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: false,
})
export class InfoPage implements OnInit {

  constructor(private router: Router) { }

  card: any;

  irAdoptar(){
    let correcto = true;

    if(correcto){
      this.router.navigate(['/adoptar'])
    }
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.card = navigation.extras.state['card'];
    } 
    this.card.edad = this.obtenerEdad(this.card.id); // Ejemplo: calcular edad según ID
      this.card.caracteristica = this.obtenerCaracteristica(this.card.id);
  }
  obtenerEdad(id: number): string {
    switch (id) {
      case 1:
        return '2 años';
      case 2:
        return '3 años';
      case 3: // Nueva lógica para la tercera tarjeta
        return '1 año';
      default:
        return 'Desconocida';
    }
  }

  obtenerCaracteristica(id: number): string {
    switch (id) {
      case 1:
        return 'Es muy juguetón y ama las zanahorias';
      case 2:
        return 'Es independiente y es muy cariñoso';
      case 3: // Nueva lógica para la tercera tarjeta
        return 'Es tímido pero cariñoso y le encanta salir a pasear';
      default:
        return 'Sin características adicionales';
    }
  }
  

}
