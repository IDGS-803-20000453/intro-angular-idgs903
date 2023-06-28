import { Component } from '@angular/core';
import { IAlumnos } from '../alumnos';

@Component({
  selector: 'app-ievn',
  templateUrl: './ievn.component.html',
  styleUrls: ['./ievn.component.css']
})
export class IevnComponent {
  imageWidth: number = 50;
  imageHeight: number = 50;
  
  imageMargin: number = 2;
  muesraImg: boolean = true;
  listFilter: string = '';

  showImage(): void {
    this.muesraImg = !this.muesraImg;
  }

  //alumnos: any[] = []
  alumnos:IAlumnos[]=[
    {
      "matricula":123,
      "nombre":"Kiliam",
      "edad":20,
      "correo":"leo_fcleon@hotmail.com",
      "pago":123.456,
      "foto":"https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/06/10/haaland_champs_1.jpg?itok=gUewr6M0",
      "calif":10

    },
    {
      "matricula":333,
      "nombre":"Mbappe",
      "edad":20,
      "correo":"mbappe_fcparissaintgerman@hotmail.com",
      "pago":1239.42,
      "foto":"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1436713160.jpeg",
      "calif":10

    }
    
  ]


}
