export class SlideHero {
    
    id: number;
    img: string;
    title: string;
    description: string;
    link?: string;

    constructor (id: number, img: string, title: string, description: string, link: string) {
        this.id = id;
        this.img = img;
        this.title = title;
        this.description = description;
        this.link = link;
    }
}