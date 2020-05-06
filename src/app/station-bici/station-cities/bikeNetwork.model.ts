import { LocationN } from './location.model';

export class BikeNetwork{
    company: string;
    href: string;
    id: string;
    location: LocationN;
    name: string;
    constructor(obj? : any ){
        this.company = obj && obj['company'] ? obj['company']: null;
        this.href= obj && obj['href'] ? obj['href']: null;
        this.id= obj && obj['id'] ? obj['id']: null;
        this.location= obj && obj['location'] ? new LocationN(obj['location']): null;
        this.name= obj && obj['name'] ? obj['name']: null;
    }
}