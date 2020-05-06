import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BikeNetwork } from '../station-bici/station-cities/bikeNetwork.model';
import { BikeStation } from '../station-bici/station-cities/bikeStation.model';
import 'rxjs/add/operator/map';
import { FullBikeNetwork } from '../station-bici/station-cities/fullBikeNetwork.model';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  networkList: BikeNetwork[] = [];

  private obsSuscription: Subscription;
  // private obser = Observable.create(observer => {
  //   observer = this.http.get('http://api.citybik.es/v2/networks');

  // })


  //stationList: BikeNetwork[] = [];

  stationList: BikeStation[] = [];
  finalStationList: BikeStation[];
  estacion: BikeStation;
  listNetwork: BikeNetwork[] = [];
  finalListNetwork: BikeNetwork [] = [];
  oneNetwork : BikeNetwork;
  //**** */
  listaFull: FullBikeNetwork[]=[];
  listaFinal: FullBikeNetwork[];
  unaRed: FullBikeNetwork;



  constructor(private http: HttpClient) {

    // const customIntervalObservable = Observable.create(observer => {
    //   observer = this.http.get('http://api.citybik.es/v2/networks');
    //  // console.log("observer es:::"+observer);
    // });

  }

 // testing() {


    // this.obsSuscription= customIntervalObservable.suscribe(data => {
    //    console.log("mas desde testing",data.response);
    //  });
    // this.obser.pipe(map((data) => {
    //  // console.log('data desde testing::::', data);
    //   return data;
    // })).suscribe(data => {
    //   console.log("mas desde testing",data.response);
    // });

 // }

//esta bien est emetodo

  getNetworksOBser(): Observable<any> {

    return this.http.get('http://api.citybik.es/v2/networks');

  }

  // getNetworksOBser(): Observable<any> {

    // return this.http.get<BikeNetwork[]>('http://api.citybik.es/v2/networks').map(data =>{
    //   console.log("!!!!!!data desde service y dentor del map",data);
   
    //   this.stationList = data;
    //   console.log("nombre de la compañia::::",this.stationList['networks']);

    //   for (let index = 0; index < this.stationList['network']['stations'].length; index++) {
    //     const element = this.stationList['network']['stations'][index];
    //     this.estacion = new BikeStation(element);
    //     this.finalStationList.push(this.estacion);
    //     console.log("valor de element del meétodo getNetworksOBser::::", this.estacion.name);
    //   }


    // });
 // }




  // getNetworkID(href: string) {
  //   return this.http.get<BikeStation[]>('http://api.citybik.es/v2/networks/' + href);
  // }


  getNetworkID(href: string): Observable<BikeStation[]> {
    return this.http.get<BikeStation[]>('http://api.citybik.es/v2/networks/' + href).map(data => {
    
      this.stationList = data;
      this.finalStationList =[];
     //console.log("!!!!!!data desde service y dentor del map",data);
   
      //console.log("nombre de la compañia::::",this.stationList['network']['company']);

      for (let index = 0; index < this.stationList['network']['stations'].length; index++) {
        const element = this.stationList['network']['stations'][index];
        this.estacion = new BikeStation(element);
        this.finalStationList.push(this.estacion);
     console.log("valor de element del método getNetWorkID: nombre Estación:::", this.estacion.name);
      }
      console.log("en get network id length:::",this.finalStationList.length);
      return this.finalStationList
    } );
  }



  getNetworks(): Observable<BikeNetwork[]> {
    return this.http.get<BikeNetwork[]>('http://api.citybik.es/v2/networks').map(data =>{
      this. listNetwork= data;
      //manejar datos aquí
      for (let index = 0; index < this.listNetwork['networks'].length; index++) {
        const element = this.listNetwork['networks'][index];
        this.oneNetwork = new BikeNetwork(element);
        this.finalListNetwork.push(this.oneNetwork);
        //console.log("element que recibe el service:::::",this.oneNetwork.location.city);
      }
      return this.finalListNetwork;
    })
  }

  getNetworkWithId(id: string): Observable<FullBikeNetwork[]>{
    return this.http.get<FullBikeNetwork[]>(`http://api.citybik.es/v2/networks/${id}`).map(data =>{
      this.listaFinal= data['network'];
      console.log("qué recibes???",data);
      //manejar datos aquí
      for (let index = 0; index < this.listaFinal['network'].length; index++) {
        const element = this.listaFinal[index];
        console.log("element:::",element);
        this.unaRed = new FullBikeNetwork(element);
        this.listaFull.push(this.unaRed);
      }
      return this.listaFull;
    })
  }



/**  listaFull: FullBikeNetwork[]=[];
  listaFinal: FullBikeNetwork[];
  unaRed: FullBikeNetwork; */











}

