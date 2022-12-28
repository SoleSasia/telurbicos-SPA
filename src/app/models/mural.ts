export interface Mural {
    
    _id: number;
    idName: string;
    title: string;
    imgs: string[] ;
    description: string;
    data: string; //ver Date
    location: string;//link to map
    tipoMural: string;

    /*
    constructor (id: number, idName: string, title: string, imgs: string[], description: string, data: string, location: string, tipoMural: string) {
        this.id = id;
        this.idName = idName;
        this.title = title;
        this.imgs = imgs;
        this.description = description;
        this.data = data;
        this.location = location;
        this.tipoMural = tipoMural;
    }*/
}
/*
export class TipoMural {
   
    id: number;
    name: string;

    constructor (id: number, name: string){
        this.id = id;
        this.name = name;
    }
}

export class Img {

    id: number;
    muralId:number;
    img: string;

    constructor (id: number, muralId: number, img: string){
        this.id = id;
        this.muralId = muralId;
        this.img = img;
    }

}*/