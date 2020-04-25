import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { ActionSequence } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { BikeStation } from '../bikeStation.model';

@Component({
  selector: 'app-bici-list',
  templateUrl: './bici-list.component.html',
  styleUrls: ['./bici-list.component.css']
})
export class BiciListComponent implements OnInit {
  //lista de stations del id que se le pasa de cada ciudad
  //recoge el param
  id: string;

  private sub: any;
  stationList: BikeStation[] = [];
  finalStationList: BikeStation[] = [];
  estacion: BikeStation;
  constructor(private bikeService: BikeService,
              private route: ActivatedRoute
    ) { 
   
  
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      console.log('el id que recibo en ngOnInit::::',this.id);
  });

    //el otro método
    this.bikeService.getNetworkID(this.id).subscribe((data) =>{
      //console.log('datos que salen en el método getStationList:::::',data);
      this.stationList = data;
      //console.log("nombre de la compañia::::",this.stationList['network']['company']);

      for (let index = 0; index < this.stationList['network']['stations'].length; index++) {
        const element = this.stationList['network']['stations'][index];
        this.estacion= new BikeStation(element);
        this.finalStationList.push(this.estacion);

       console.log("valor de element del me´todo get stationsList::::",this.estacion.empty_slots);



      }

       



    });




}


  getStationList(){
    this.bikeService.getNetworkID(this.id).subscribe((data) =>{
      //console.log('datos que salen en el método getStationList:::::',data);
      this.stationList = data;
      //console.log("nombre de la compañia::::",this.stationList['network']['company']);

      for (let index = 0; index < this.stationList['network']['stations'].length; index++) {
        const element = this.stationList['network']['stations'][index];
        this.estacion= new BikeStation(element);
        this.finalStationList.push(this.estacion);

       console.log("valor de element del me´todo get stationsList::::",this.estacion.empty_slots);
   


      }

       



    });
  
  }

 
}

