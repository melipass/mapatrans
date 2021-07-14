import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makePopup(data: any): string {
    if (data.addr_street == '') {
      return `` +
      `<div>Nombre: ${ data.name }</div>` +
      `<div>Tipo: ${ data.amenity }</div>` +
      `<img src="assets/hospital.svg" width="300px">`
    }
    else {
      return `` +
      `<div>Nombre: ${ data.name }</div>` +
      `<div>Tipo: ${ data.amenity }</div>` +
      `<div>Calle: ${ data.addr_street }</div>` +
      `<img src="assets/hospital.svg" width="300px">`
    }
    
  }
}
