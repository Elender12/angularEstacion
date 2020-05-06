export class User {
    name: string;
    apellidos: string;
    genero: string;
    email: string;
    password: string;
    birth: Date;
    constructor(obj?: any){
        this.name = obj && obj['name'] ? obj['name']: null;
        this.apellidos = obj && obj['apellidos'] ? obj['apellidos']: null;
        this.genero= obj && obj['genero'] ? obj['genero']:null;
        this.email = obj && obj['email'] ? obj['email']: null;
        this.password = obj && obj['password'] ? obj['password']: null;
        this.birth = obj && obj['birth'] ? obj['birth']: null;
    }

}
