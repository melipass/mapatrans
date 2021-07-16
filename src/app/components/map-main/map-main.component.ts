import { ThrowStmt } from '@angular/compiler';
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from 'src/app/services/marker.service';

const iconRetinaUrl = 'assets/marker/stick-flag-transgender.svg';
const iconUrl = 'assets/marker/stick-flag-transgender.svg';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [30, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.css']
})
export class MapMainComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -33.4489, -70.6693 ],
      zoom: 12,
      attributionControl: false,
      scrollWheelZoom: false
    });

    const tiles = L.tileLayer('https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=pUANyYteIIcocNMew6oH', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
    });

    /*const gl = L.mapboxGL({
      attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://carto.com/\" target=\"_blank\"\u003e\u0026copy; CARTO\u003c/a\u003e",
      style: 'https://api.maptiler.com/maps/3b7a159a-07b6-43ed-9229-ecc1d6512ec3/style.json?key=pUANyYteIIcocNMew6oH'
    }).addTo(this.map);*/

    tiles.addTo(this.map);
  }

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeMarkers(this.map);
  }

}
