export class BikeStation {
    empty_slots: number;
    extra: string[];
    free_bikes: number;
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    timestamp: Date;
    constructor(obj? : any ){
        this.empty_slots = obj && obj['empty_slots'] ? obj['empty_slots']: null;
        this.extra= obj && obj['extra'] ? obj['extra']: null;
        this.free_bikes= obj && obj['free_bikes'] ? obj['free_bikes']: null;
        this.id= obj && obj['id'] ? obj['id']: null;
        this.latitude= obj && obj['latitude'] ? obj['latitude']: null;
        this.longitude= obj && obj['longitude'] ? obj['longitude']: null;
        this.name= obj && obj['name'] ? obj['name']: null;
        this.timestamp= obj && obj['timestamp'] ? obj['timestamp']: null;
    }
}

