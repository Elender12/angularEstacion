export class LocationN{
    location: string;
    latitude: number;
    city: string;
    longitude: number;
    country: string;
    constructor(obj? : any ){
        this.location = obj && obj['location'] ? obj['location']: null;
        this.latitude= obj && obj['latitude'] ? obj['latitude']: null;
        this.city= obj && obj['city'] ? obj['city']: null;
        this.longitude= obj && obj['longitude'] ? obj['longitude']: null;
        this.country= obj && obj['country'] ? obj['country']: null;
    }




}

/**     "location": {
          "latitude": 48.856612, 
          "city": "Paris", 
          "longitude": 2.352233, 
          "country": "FRA" */