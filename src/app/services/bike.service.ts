import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BikeNetwork } from '../station-bici/bikeNetwork.model';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  networkList: BikeNetwork[] = [];

  constructor(private http: HttpClient) {
        this.getNetworks().subscribe((networks) => {
          this.networkList = networks;
          this.useNetworks(this.getNetworks);

        });



   }


  // getNetworks(): Observable<any>{
  //      return this.http.get('http://api.citybik.es/v2/networks');
       
  // }

  getNetworks(){
      return this.http.get<BikeNetwork[]>('http://api.citybik.es/v2/networks');
  }
  useNetworks(networks: any){
    console.log(networks);

  }

}
