import { Component, OnInit } from '@angular/core';
import { Database, object } from '@angular/fire/database';
import { ref } from 'firebase/database';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.page.html',
  styleUrls: ['./cuarto.page.scss'],
})
export class CuartoPage implements OnInit {

  isButtonFocused: boolean = false;

  constructor(private database:Database) {}

  ngOnInit() {
    const route = ref(this.database, 'Casa/cuarto');
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