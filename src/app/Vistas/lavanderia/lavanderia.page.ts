import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-lavanderia',
  templateUrl: './lavanderia.page.html',
  styleUrls: ['./lavanderia.page.scss'],
})
export class LavanderiaPage implements OnInit {

  isButtonFocused: boolean = false;

  constructor(private database:Database) {}

  ngOnInit() {
    const route = ref(this.database, 'Casa/lavanderia');
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      const isButtonFocused = valores_db; // Supongamos que el valor en la base de datos es true o false
      this.toggleFocus(isButtonFocused);
    });
  }
  
  toggleFocus(isButtonFocused?: boolean) {
    if (isButtonFocused !== undefined) {
      this.isButtonFocused = isButtonFocused;
    } else {
      this.isButtonFocused = !this.isButtonFocused; // Cambia al estado inverso
    }
    console.log('El estado del botón es:', this.isButtonFocused);
  }

}
