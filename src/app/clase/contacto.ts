import { EmailValidator } from "@angular/forms";

export class Contacto  {

     id:Number = 0;
     nombre:string | undefined;
     telefono:Number | undefined;
     nacimiento: Date | undefined;
     direccion:string | undefined;
     correo:EmailValidator | undefined;
  

}
