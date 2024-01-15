import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, marker, tileLayer, Bounds } from 'leaflet';
import * as L from 'leaflet';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit, AfterViewInit {
  private map!: L.Map
  markers: L.Marker[] = [
    L.marker([19.0775, 72.8771]), // Mumbai

  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeMap();
    this.addMarkers();
    this.centerMap();
  }


  private initializeMap() {
    const baseMapURl = 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png'
    const OpenWeatherMap_Wind = 'http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid=2aaa663e1086a2c24dafe936a390a243'
    const OpenWeatherMap_Pressure = 'http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png?appid=2aaa663e1086a2c24dafe936a390a243'
    const OpenWeatherMap_Clouds = 'http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=2aaa663e1086a2c24dafe936a390a243'

    this.map = L.map('map');
    L.tileLayer(baseMapURl).addTo(this.map);
    L.tileLayer(OpenWeatherMap_Wind).addTo(this.map);
    // L.tileLayer(OpenWeatherMap_Pressure).addTo(this.map);
    // L.tileLayer(OpenWeatherMap_Clouds).addTo(this.map);
  }


  private addMarkers() {
    // Add your markers to the map
    this.markers.forEach(marker => marker.addTo(this.map));
  }

  private centerMap() {
    // Create a LatLngBounds object to encompass all the marker locations
    const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));

    // Fit the map view to the bounds
    this.map.fitBounds(bounds);
  }
}