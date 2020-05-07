import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';
import { Subscription } from 'rxjs';
import { BikeStation } from 'src/app/station-bici/station-cities/bikeStation.model';
import { FullBikeNetwork } from 'src/app/station-bici/station-cities/fullBikeNetwork.model';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-station-map',
  templateUrl: './station-map.component.html',
  styleUrls: ['./station-map.component.css']
})
export class StationMapComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    console.log("contenido en open Info::", this.infoContent);
    this.infoWindow.open(marker)
  }

  infoContent: any;
  zoom = 0;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    maxZoom: 21,
    minZoom: 13,
  }

  latitudeN: number;
  longitudeN: number;
  //*** */
  sub: any;
  id: string;
  suscripObs: Subscription;
  finalStationList: BikeStation[] = [];
  listFullNetwork: FullBikeNetwork[] = [];
  fullNetwork: FullBikeNetwork;
  markers: any[] = [];
  estaciones: BikeStation[] = [];
  constructor(private bikeService: BikeService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('el id que recibo en ngOnInit::::', this.id);
    });

    this.suscripObs = this.bikeService.getNetworkWithId(this.id).subscribe(
      (data) => {
        this.fullNetwork = data;
        //  console.log("data es::",data);
        this.estaciones = this.fullNetwork.stations;
        this.latitudeN = this.fullNetwork.location.latitude;
        console.log(this.latitudeN);
        this.longitudeN = this.fullNetwork.location.longitude;
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: this.latitudeN,
            lng: this.longitudeN,
          }
        })

        for (let index = 0; index < this.estaciones.length; index++) {
          const element = this.estaciones[index];
          this.markers.push({
            position: {
              lat: element.latitude,
              lng: element.longitude,
            },
            label: {
              color: 'white',
              text: element.name,
            },
            title: element.name,
            info: element.name+' has ' + element.free_bikes + ' free bikes and '+element.empty_slots+' empty slots.'
          });
          //console.log("desde el for ngInit de station-list: nombre estación:::",element.name);
        }
      },
      error => {
        console.log("error que da:::::", <any>error);
      });
  }
}
