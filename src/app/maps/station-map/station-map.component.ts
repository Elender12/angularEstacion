import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';
import { Subscription } from 'rxjs';
import { BikeStation } from 'src/app/station-bici/station-cities/bikeStation.model';
import { FullBikeNetwork } from 'src/app/station-bici/station-cities/fullBikeNetwork.model';

@Component({
  selector: 'app-station-map',
  templateUrl: './station-map.component.html',
  styleUrls: ['./station-map.component.css']
})
export class StationMapComponent implements OnInit {
  zoom = 0;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 21,
    minZoom: 10,
  }

  latitudeN: number;
  longitudeN: number;
  //*** */
  sub: any;
  id: string;
  suscripObs: Subscription;
  finalStationList: BikeStation[] = [];
  listFullNetwork: FullBikeNetwork[]=[];
  markers: any[] = [];
  constructor(private bikeService: BikeService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    

    navigator.geolocation.getCurrentPosition(position => {
      this.center = {

        lat:  45.6495,
        lng: 13.7768,
      }
    })
    /***** */
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('el id que recibo en ngOnInit::::', this.id);
    });


    // this.suscripObs = this.bikeService.getNetworkID(this.id).subscribe(
    //   (data) => {

    //     this.finalStationList = data
    //     for (let index = 0; index < this.finalStationList.length; index++) {
    //       const element = this.finalStationList[index];
          
    //       this.markers.push({
    //         position: {
    //           lat: element.latitude,
    //           lng: element.longitude,
    //         },
    //         label: {
    //           color: 'yellow',
    //           text:  element.name ,
    //         },
    //         title: element.name
    //       });
    //       console.log("desde el for ngInit de station-list: nombre estación:::",element.name);
    //     }
    //   },
    //   error => {
    //     console.log("error que da:::::", <any>error);
    //   });

    this.suscripObs = this.bikeService.getNetworkWithId(this.id).subscribe(
      (data) => {

        this.listFullNetwork = data;
        console.log(this.longitudeN," es la longitud :(",this.listFullNetwork.length);
        // this.latitudeN = this.listFullNetwork[0].location.latitude;
        // this.longitudeN = this.listFullNetwork[0].location.longitude;
  
        for (let index = 0; index < this.listFullNetwork.length; index++) {
          const element = this.listFullNetwork[index].stations;
          
          
          this.markers.push({
            position: {
              lat: element.latitude,
              lng: element.longitude,
            },
            label: {
              color: 'yellow',
              text:  element.name ,
            },
            title: element.name
          });
          console.log("desde el for ngInit de station-list: nombre estación:::",element.name);
        }
      },
      error => {
        console.log("error que da:::::", <any>error);
      });














  }

}
