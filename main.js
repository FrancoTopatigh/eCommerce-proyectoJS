// IVA

const iva = 1.21;

// CARRITO VARIABLE
let cart = [];

// Class y constructor

class Shirt {
    constructor (id, shirtName, season, price, league, all, img) {
        this.id = id;
        this.shirtName = shirtName;
        this.season = season;
        this.price = price;
        this.league = league;
        this.all = all;
        this.img = img
    }

    priceCalculator (){
        return this.price * iva;
    }
}

// Objetos

const shirt1 = new Shirt ("1", "Inter Visitante", "21/22", 8499, "Liga Italiana", "allProducts", "img/inter-shirt.jpg");
const shirt2 = new Shirt ("2", "Milan Titular", "21/22", 8499, "Liga Italiana", "allProducts", "img/milan-shirt.jpg");
const shirt3 = new Shirt ("3","Juventus Titular", "22/23", 8999, "Liga Italiana", "allProducts" , "img/juve-shirt.png");
const shirt4 = new Shirt ("4", "Manchester City", "22/23", 9699,"Liga Inglesa", "allProducts" , "img/city-shirt.png");
const shirt5 = new Shirt ("5", "Manchester United", "21/22", 8499, "Liga Inglesa", "allProducts" , "img/manunited-shirt.png");
const shirt6 = new Shirt ("6", "Real Madrid Titular", "22/23", 9999, "Liga Española", "allProducts", "img/madrid-shirt.webp");
const shirt7 = new Shirt ("7", "Barcelona Titular", "22/23", 9999, "Liga Española", "allProducts", "img/barcelona-shirt.png");
const shirt8 = new Shirt ("8", "Atletico Madrid", "21/22", 7999, "Liga Española", "allProducts", "img/atletico-shirt.jpg");
const shirt9 = new Shirt ("9","Porto Titular", "22/23", 7999, "Liga Portuguesa", "allProducts", "img/porto-shirt.png");
const shirt10 = new Shirt ("10", "Benfica Titular", "22/23", 7999, "Liga Portuguesa","allProducts", "img/benfica-shirt.png");
const shirt11 = new Shirt ("11", "Borussia Dortmund", "22/23", 9499, "Liga Alemana", "allProducts", "img/bvb-shirt.png");
const shirt12 = new Shirt ("12", "Bayern Munich", "22/23", 9999, "Liga Alemana", "allProducts", "img/bayernMunchen-shirt.png");


// Array
const shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12];

showCards(shirts)

// DOM - CARDS
function showCards(shirtsToShow){
        let acumulador = ``;
        shirtsToShow.forEach((shirt) => {
            acumulador += `<div class="page-content">
                            <div class="product-container">
                            <img src=${shirt.img} alt=${shirt.shirtName}>
                            <h3>${shirt.shirtName} - ${shirt.season}</h3>
                            <h3>$${shirt.price}</h3>
                            <button class="btnAddToCart" onclick="addShirtToCart(${shirt.id})">Agregar al carrito</button>
                            </div>    
                            </div>`
    })
    document.getElementById('card-container').innerHTML = acumulador
}



// Logica para eliminar producto del carrito

const deleteShirt = (shirt) => {
    let index = shirts.indexOf(shirt);

    if (index !== -1) {
        shirts.splice(index, 1);
        alert("Se ha elimado el producto del carrito con exito")
    }
}

deleteShirt();

// Funciones

//  Funciones filtrado POR LIGA
function filterByLeague(league){
    const newFilter = shirts.filter((shirt) => shirt.league == league)
    showCards(newFilter);
    console.log(newFilter);
}

// Funcion MOSTRAR TODOS LOS PRODUCTOS
function showAllTheProducts(all){
    const newFilter2 = shirts.filter((shirt) => shirt.all == all);
    showCards(newFilter2);
    console.log(newFilter2)
}

// Funcion AGREGAR al CARRITO
function addShirtToCart(id) {
    // Buscamos el producto en la base de datos de prueba
    const shirtIdFound = shirts.find((shirt) => shirt.id == id);

    // Agregar el producto al cart
    cart.push(shirtIdFound);

    // Calcular el total de los productose
    const totalCart = cart.reduce((acumulador, shirt) => acumulador + shirt.price, 0);

    // Mostrar en el html la actualizacion de los valores cambiados
    document.getElementById("cartShirt").innerHTML = cart.length + "- $" + totalCart;
}









