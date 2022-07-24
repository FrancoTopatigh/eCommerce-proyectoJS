// PRODUCTOS
// Class y constructor

class Shirt {
    constructor (id, name, season, price, league, all, img, inCart) {
        this.id = id;
        this.name = name;
        this.season = season;
        this.price = price;
        this.league = league;
        this.all = all;
        this.img = img;
        this.inCart = inCart
    }

    priceCalculator (){
        return this.price * iva;
    }
}

// Objetos

const shirt1 = new Shirt ("1", "Inter Titular", "22/23", 8999, "Liga Italiana", "allProducts", "img/inter-shirt.png", 0);
const shirt2 = new Shirt ("2", "Milan Titular", "22/23", 8999, "Liga Italiana", "allProducts", "img/milan-shirt.png", 0);
const shirt3 = new Shirt ("3","Juventus Titular", "22/23", 8999, "Liga Italiana", "allProducts" , "img/juve-shirt.png", 0);
const shirt4 = new Shirt ("4", "Manchester City", "22/23", 9699,"Liga Inglesa", "allProducts" , "img/city-shirt.png", 0);
const shirt5 = new Shirt ("5", "Manchester United", "22/23", 9699, "Liga Inglesa", "allProducts" , "img/manchester-shirt.png", 0);
const shirt6 = new Shirt ("6", "Real Madrid Titular", "22/23", 9999, "Liga Española", "allProducts", "img/madrid-shirt.webp", 0);
const shirt7 = new Shirt ("7", "Barcelona Titular", "22/23", 9999, "Liga Española", "allProducts", "img/barcelona-shirt.png", 0);
const shirt8 = new Shirt ("8", "Atletico Madrid", "21/22", 7999, "Liga Española", "allProducts", "img/atletico-shirt.jpg", 0);
const shirt9 = new Shirt ("9","Porto Titular", "22/23", 7999, "Liga Portuguesa", "allProducts", "img/porto-shirt.png", 0);
const shirt10 = new Shirt ("10", "Benfica Titular", "22/23", 7999, "Liga Portuguesa","allProducts", "img/benfica-shirt.png", 0);
const shirt11 = new Shirt ("11", "Borussia Dortmund", "22/23", 8999, "Liga Alemana", "allProducts", "img/bvb-shirt.png", 0);
const shirt12 = new Shirt ("12", "Bayern Munich", "22/23", 9999, "Liga Alemana", "allProducts", "img/bayern-shirt.png", 0);


// Array
const shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12];