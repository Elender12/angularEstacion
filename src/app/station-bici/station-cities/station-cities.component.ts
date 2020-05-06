import { Component, OnInit, OnDestroy } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { BikeNetwork } from './bikeNetwork.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-station-cities',
  templateUrl: './station-cities.component.html',
  styleUrls: ['./station-cities.component.css']
})
export class StationCitiesComponent implements OnInit, OnDestroy {



  networkList: BikeNetwork[] = [];
  //atributos para Pagination
  currentPage: number = 1;
  totalItems: number;
  //atributos para manejar respuestas de la api
  //cityList: string[] = [];
  //dataList = new Map();
  suscripcion: Subscription;
  constructor(private bikeService: BikeService) { 
          
  }

  ngOnInit(): void {
    this.suscripcion= this.bikeService.getNetworks().subscribe(
      (networks) => {
        this.networkList = networks;
        // console.log();
        for (let index = 0; index < this.networkList.length; index++) {
          const element = this.networkList[index];
         console.log("coordinadas:::::",element['location']['latitude'],"::::",element['location']['longitude']);
          
        }
        // for (let index = 0; index < this.networkList['networks'].length; index++) {
        //   const element = this.networkList['networks'][index];
        //   this.dataList.set(element.id, element['location'].city);
        // }
        // console.log('size of data list',this.dataList.size);
        this.totalItems = this.networkList.length;
      },
      error => {
        console.log("error que da:::::", <any>error);
      }
    );
  }

  // getBikeCities() {

  //   for (let index = 0; index < this.networkList['networks'].length; index++) {
  //     const element = this.networkList['networks'][index];
  //     this.cityList.push(element['location'].city);


  //   }
  
  // }


  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();

  }

}
