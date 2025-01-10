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

  irAdoptar(){
    let correcto = true;

    if(correcto){
      this.router.navigate(['/adoptar'])
    }
  }

  ngOnInit() {
    
  }
  

}
