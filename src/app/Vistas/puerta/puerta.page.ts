import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puerta',
  templateUrl: './puerta.page.html',
  styleUrls: ['./puerta.page.scss'],
})
export class PuertaPage implements OnInit {

  constructor(private router: Router) {}

  entrar() {
    this.router.navigate(['./sala']);
  }

  ngOnInit() {
  }

}
