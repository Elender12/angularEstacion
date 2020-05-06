import { LocationN } from './location.model';
import { BikeStation } from './bikeStation.model';

export class FullBikeNetwork{
    company: string;
    href: string;
    id: string;
    location: LocationN;
    stations: BikeStation;
    name: string;
    constructor(obj? : any ){
        this.company = obj && obj['company'] ? obj['company']: null;
        this.href= obj && obj['href'] ? obj['href']: null;
        this.id= obj && obj['id'] ? obj['id']: null;
        this.location= obj && obj['location'] ? new LocationN(obj['location']): null;
        this.name= obj && obj['name'] ? obj['name']: null;
        this.stations= obj && obj['name'] ? new BikeStation(obj['stations']):null;
    }


}