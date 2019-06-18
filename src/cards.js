class Cards {
    constructor (t,img,points,id){
        this.text = t;
        this.image = img;
        this.points = points;
        this.id=id;
    }
}

let card1 = new Cards('hey there','https://img.png', 23)
let card2 = new Cards('hey there','https://img.png')
let card3 = new Cards('hey there','https://img.png')