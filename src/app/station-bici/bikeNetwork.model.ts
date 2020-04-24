export class BikeNetwork{
    company: string;
    href: string;
    id: string;
    location: string[];
    name: string;
    constructor(obj? : any ){
        this.company = obj && obj['company'] ? obj['company']: null;
        this.href= obj && obj['href'] ? obj['href']: null;
        this.id= obj && obj['id'] ? obj['id']: null;
        this.location= obj && obj['location'] ? obj['location']: null;
        this.name= obj && obj['name'] ? obj['name']: null;
    }
}

/*
company: ["ЗАО «СитиБайк»"]
href: "/v2/networks/velobike-moscow"
id: "velobike-moscow"
location: {city: "Moscow", country: "RU", latitude: 55.75, longitude: 37.616667}
name: "Velobike" */