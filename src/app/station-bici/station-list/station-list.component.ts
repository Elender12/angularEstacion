import { Component, OnInit, OnDestroy } from '@angular/core';
import { BikeStation } from '../station-cities/bikeStation.model';
import { BikeService } from 'src/app/services/bike.service';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit, OnDestroy {


  //recoge el param
  id: string;
  private sub: any;
  obs: any;
  stationListOBS: BikeStation[] = [];
  suscripObs: Subscription;

  //componente paginate
  currentPage: number = 1;
  totalItems: number;

  stationList: BikeStation[] = [];
  finalStationList: BikeStation[] = [];
  estacion: BikeStation;

  constructor(private bikeService: BikeService,
    private route: ActivatedRoute,
  ) {

  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      //console.log('el id que recibo en ngOnInit::::', this.id);
    });

    this.suscripObs = this.bikeService.getNetworkID(this.id).subscribe(
      (data) => {

        this.finalStationList = data
        // for (let index = 0; index < this.finalStationList.length; index++) {
        //   const element = this.finalStationList[index];
        //   console.log("desde el for ngInit de station-list: nombre estación:::",element.name);

        // }
        // console.log("::::::::::::::::::::::::STOP:::::::::::::::::::::::::::");
        this.totalItems = this.finalStationList.length;
        //console.log("logitud de la lista en el ngInit de station list",this.finalStationList.length);

        // console.log("desde el componente lo que recibe:::::::",this.stationList);
      },
      error => {
        console.log("error que da:::::", <any>error);
      });
  }

  ngOnDestroy(): void {
    this.suscripObs.unsubscribe();
  }

}



  // getStationList() {
  //   this.bikeService.getNetworkID(this.id).subscribe((data) => {
  //     //console.log('datos que salen en el método getStationList:::::',data);
  //     this.stationList = data;
  //     //console.log("nombre de la compañia::::",this.stationList['network']['company']);

  //     for (let index = 0; index < this.stationList['network']['stations'].length; index++) {
  //       const element = this.stationList['network']['stations'][index];
  //       this.estacion = new BikeStation(element);
  //       this.finalStationList.push(this.estacion);
  //       //console.log("valor de element del me´todo get stationsList::::", this.estacion.empty_slots);
  //     }
  //   });
  // }


/***********************lo antiguo******* */
    //el otro método
    // this.bikeService.getNetworkID(this.id).subscribe((data) => {
    //   //console.log('datos que salen en el método getStationList:::::',data);
    // this.stationList = data;
    //   //console.log("nombre de la compañia::::",this.stationList['network']['company']);
    //   for (let index = 0; index < this.stationList['network']['stations'].length; index++) {
    //     const element = this.stationList['network']['stations'][index];
    //     this.estacion = new BikeStation(element);
    //     this.finalStationList.push(this.estacion);
    //    // console.log("valor de element del método get stationsList::::", this.estacion.empty_slots);
    //   }
    // });








    // this.bikeService.getNetworksOBser().subscribe(
    //   (data) => {
    //     this.stationListOBS= data;
    //    // console.log("codigo del data::::",data.response);

    // },
    // error => {
    //   console.log("error que da:::::", <any>error);

    // });

   // this.bikeService.testing();

       // const customIntervalObservable = Observable.create(observer => {
    //   observer = this.http.get('http://api.citybik.es/v2/networks');
    //   //console.log("observer es:::"+observer.response);
    // });

    // this.suscripObs = customIntervalObservable.subscribe(data => {
    //   //  console.log("data desde el suscribe del ngOnInit::"+data);
    // });

    //console.log("suscripOBS::",this.suscripObs);

