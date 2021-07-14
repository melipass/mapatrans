import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  data: string = '/assets/data/chile.geojson'

  constructor(
    private http: HttpClient,
    private popupService: PopupService
  ) { }

  makeMarkers(map: L.map): void {
    this.http.get(this.data).subscribe((res: any) => {
      for (const c of res.features) {
        if (c.properties.amenity == 'hospital'){
          if (typeof(c.geometry.coordinates[0]) == 'number'){
            const lon = c.geometry.coordinates[0];
            const lat = c.geometry.coordinates[1];
            const marker = L.marker([lat, lon]);
            marker.bindPopup(this.popupService.makePopup(c.properties));
            marker.addTo(map);
          }
          else if (typeof(c.geometry.coordinates[0][0]) == 'number'){
            const lon = c.geometry.coordinates[0][0];
            const lat = c.geometry.coordinates[0][1];
            const marker = L.marker([lat, lon]);
            marker.bindPopup(this.popupService.makePopup(c.properties));
            marker.addTo(map);
          }
          else if (typeof(c.geometry.coordinates[0][0][0]) == 'number' && c.properties.amenity == 'hospital'){
            const lon = c.geometry.coordinates[0][0][0];
            const lat = c.geometry.coordinates[0][0][1];
            const marker = L.marker([lat, lon]);
            marker.bindPopup(this.popupService.makePopup(c.properties));
            marker.addTo(map);
          }
          else {}
        }
      }
    });
  }
}
