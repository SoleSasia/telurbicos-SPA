export interface Mural {
    
    title: string;
    idName: string;
    location: string;//link to map
    description: string;
    paintingDate: Date;//ver date y pipe para ordenar por fecha
    tipoMural: string;
    imgs: string[];
}