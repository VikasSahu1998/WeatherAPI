import { Component } from '@angular/core';
import { APIService } from '../Server/api.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  constructor(private api: APIService,) { }

  Metar!: any;
 
  ngOnInit() {
    this.api.getData().subscribe((res) => {
      this.Metar = res.data;
    });
  }
}