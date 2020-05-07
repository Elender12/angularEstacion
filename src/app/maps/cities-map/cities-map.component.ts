import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GoogleMapsModule } from '@angular/google-maps';
import { Subscription } from 'rxjs';
import { BikeService } from 'src/app/services/bike.service';
import { BikeNetwork } from 'src/app/station-bici/station-cities/bikeNetwork.model';



@Component({
  selector: 'app-cities-map',
  templateUrl: './cities-map.component.html',
  styleUrls: ['./cities-map.component.css']
})
export class CitiesMapComponent implements OnInit {


  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow

  openInfo(marker: MapMarker, content) {
    this.infoContent= content;
    console.log("contenido en open Info::", this.infoContent);
    this.infoWindow.open(marker)
  }




  infoContent: any;
  zoom = 0;
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 21,
    minZoom: 4, //antes era 4
  }
  //lista de los puntos donde existe una ciudad
  markers: any[] = [];
  //para utilizar el sevicio :3 
  suscripcion: Subscription;
  networkList: BikeNetwork[] = [];


  constructor(private bikeService: BikeService) {

  }

  ngOnInit() {


    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  
   
 
    this.suscripcion = this.bikeService.getNetworks().subscribe(
      (networks) => {
        this.networkList = networks;
        // console.log();
        for (let index = 0; index < this.networkList.length; index++) {
          const element = this.networkList[index];
        //  console.log("coordinadas:::::", element['location']['latitude'], "::::", element['location']['longitude']);
          this.markers.push({
            position: {
              lat: element['location']['latitude'],
              lng: element['location']['longitude'],
            },
            label: {
              color: 'yellow',
              text:  element['location']['city'] ,
            },
            title: element['id'] //aqui va el id..
           
           // options: { animation: google.maps.Animation.BOUNCE },
          });

        }

      },
      error => {
        console.log("error que da:::::", <any>error);
      }
    );
  
  }
 

}
