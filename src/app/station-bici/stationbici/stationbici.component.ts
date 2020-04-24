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

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    // this.bikeService.getNetworks()
    // .subscribe(data => {
    //   console.log('en el suscribe saco::::',data);
   // this.bikeService.useNetworks();
   this.bikeService.getNetworks().subscribe((networks) => {
    this.networkList = networks;
   
    //this.bikeService.useNetworks(this.networkList);
    console.log("pues aqui",this.networkList['networks'][0]);
  
  });
  





  }

  estoyYaHarta(){
    console.log("puta mierda..");
    for (let index = 0; index < this.networkList['networks'].length; index++) {
      const element = this.networkList[index];
      console.log(element.name);
      
    }

  }
  }


  


