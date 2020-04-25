import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { BikeNetwork } from '../bikeNetwork.model';
import { ɵTestingCompiler } from '@angular/core/testing';

@Component({
  selector: 'app-stationbici',
  templateUrl: './stationbici.component.html',
  styleUrls: ['./stationbici.component.css']
})
export class StationbiciComponent implements OnInit {
  networkList: BikeNetwork[] = [];

  cityList: string[]= [];
  dataList = new Map();
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    // this.bikeService.getNetworks()
    // .subscribe(data => {
    //   console.log('en el suscribe saco::::',data);
   // this.bikeService.useNetworks();
   this.bikeService.getNetworks().subscribe((networks) => {
    this.networkList = networks;
 
    
    for (let index = 0; index < this.networkList['networks'].length; index++) {
      const element = this.networkList['networks'][index];
     //console.log(element);
     // this.cityList.push(element['location'].city);
      this.dataList.set(element.id, element['location'].city );
     // console.log(element['location'].city,' y este es el id: ',element.id);
    
    }
    //this.bikeService.useNetworks(this.networkList);
    //console.log("pues aqui",this.networkList['networks'][0]);
  });
  // this.bikeService.getNetworkID('velocea').subscribe((data) =>{
  //   console.log(data);
  // });

  





  }

  getBikeCities(){
 
    for (let index = 0; index < this.networkList['networks'].length; index++) {
      const element = this.networkList['networks'][index];
      this.cityList.push(element['location'].city);
     
      
    }

  }
  }


  


