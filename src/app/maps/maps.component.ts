import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, marker, tileLayer, Bounds } from 'leaflet';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {
  apiKey!: '<2aaa663e1086a2c24dafe936a390a243>';
  ngAfterViewInit(): void {
    const map = new Map('map').setView([19.0876, 72.8761], 13);
    tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    

    const markeritem = marker([19.0876, 72.8761]).addTo(map).bindPopup("Hey There...");

    // map.fitBounds([[
    //   markeritem.getLatLng().lat,
    //   markeritem.getLatLng().lng]
    // ]);
  }
}