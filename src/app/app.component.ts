import { Component } from '@angular/core';
import { Contacto } from './clase/contacto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contactoArray: Contacto[] = [];
 // {id:1, nombre: "Jeisson", telefono: 123, nacimiento: 123, direccion: "calle", correo: "jj@gm.co" } 
  //Asignamos un contacto vacio 
  seleccionContacto: Contacto = new Contacto();

  //evento click para agregar o editarcontacto

  addOrEdit(){

      localStorage.setItem('contacto', JSON.stringify(this.contactoArray));
     
    if(this.seleccionContacto.id === 0){
      this.seleccionContacto.id = this.contactoArray.length + 1;
      this.contactoArray.push(this.seleccionContacto);
      
    }
    this.seleccionContacto = new Contacto();
    
  }
  //evento para modificar

  openEdit(contacto: Contacto){
    this.seleccionContacto = contacto;
  }

  delete(){

    if(confirm("¿Quieres borrar el contacto?")){
      this.contactoArray = this.contactoArray.filter(x => x != this.seleccionContacto );
      this.seleccionContacto = new Contacto();

    }
  }
}
