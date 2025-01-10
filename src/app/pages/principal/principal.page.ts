import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: false,
})
export class PrincipalPage implements OnInit {

  nombre: string = "";
  especie: string = "";
  genero: string = "";

  constructor(private router: Router) { }

  irInfo(){

    this.router.navigate(['/info'])
  }
  ngOnInit() {
  }

}
