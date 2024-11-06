import { Component , AfterViewInit,  } from '@angular/core';

import * as L from 'leaflet';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements AfterViewInit {
  private map!: L.Map

  ngAfterViewInit() {
    this.initializeMap();
  }

  private initializeMap() {
    const baseMapURl = 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png';
    const OpenWeatherMap_Wind = 'http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid=2aaa663e1086a2c24dafe936a390a243';
    const OpenWeatherMap_Pressure = 'http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png?appid=2aaa663e1086a2c24dafe936a390a243';
    const OpenWeatherMap_Clouds = 'http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=2aaa663e1086a2c24dafe936a390a243';

    this.map = L.map('map').setView([20.5937, 78.9629], 5);

    const baseLayer = L.tileLayer(baseMapURl);
    const windLayer = L.tileLayer(OpenWeatherMap_Wind);
    const pressureLayer = L.tileLayer(OpenWeatherMap_Pressure);
    const cloudsLayer = L.tileLayer(OpenWeatherMap_Clouds);

    const baseMaps = {
      "Base Map": baseLayer
    };

    const overlayMaps = {
      "Wind": windLayer,
      "Pressure": pressureLayer,
      "Clouds": cloudsLayer
    };

    baseLayer.addTo(this.map);
    L.control.layers(baseMaps, overlayMaps).addTo(this.map);
  }
}