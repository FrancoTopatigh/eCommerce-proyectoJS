// PROMPT DE BIENVENIDA
// let name = prompt('Ingrese su nombre');
// let age = parseInt(prompt('Ingrese su edad'));

// if (name == ""){
//     alert('No ha ingresado su nombre');   
// } else{
//     alert('Bienvenido, ' + name + "!")
// }

// console.log('Datos del usuario: ' + name +  ' ' + age + ' ' + 'años');
// console.log('Gracias por elegirnos, ' + name + "!");


// IVA

const iva = 1.21;

// Class y constructor

class Shirt {
    constructor (id, shirtName, season, price, league, all) {
        this.id = id;
        this.shirtName = shirtName;
        this.season = season;
        this.price = price;
        this.league = league;
        this.all = all;
    }

    priceCalculator (){
        return this.price * iva;
    }
}

// Objetos

const shirt1 = new Shirt ("1", "Inter Visitante", "21/22", 8499, "Liga Italiana", "allProducts");
const shirt2 = new Shirt ("2", "Milan Titular", "21/22", 8499, "Liga Italiana", "allProducts");
const shirt3 = new Shirt ("3","Juventus Titular", "22/23", 8999, "Liga Italiana", "allProducts");
const shirt4 = new Shirt ("4", "Manchester City Titular", "22/23", 9699,"Liga Inglesa", "allProducts");
const shirt5 = new Shirt ("5", "Manchester United Titular", "21/22", 8499, "Liga Inglesa", "allProducts");
const shirt6 = new Shirt ("6", "Real Madrid Titular", "22/23", 9999, "Liga Española", "allProducts");
const shirt7 = new Shirt ("7", "Barcelona Titular", "22/23", 9999, "Liga Española", "allProducts");
const shirt8 = new Shirt ("8", "Atletico de Madrid Titular", "21/22", 7999, "Liga Española", "allProducts");
const shirt9 = new Shirt ("9","Porto Titular", "22/23", 7999, "Liga Portuguesa", "allProducts");
const shirt10 = new Shirt ("10", "Benfica Titular", "22/23", 7999, "Liga Portuguesa","allProducts");
const shirt11 = new Shirt ("11", "Borussia Dortmund Titular", "22/23", 9499, "Liga Alemana", "allProducts");
const shirt12 = new Shirt ("12", "Bayern Munchen Titular", "22/23", 9999, "Liga Alemana", "allProducts");


// Array
const shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12];

let cart = [];

// DOM - CARDS
let acumulador = ``;
shirts.forEach((shirt) => {
    acumulador += `<div class="page-content">
    <div class="product-container">
        <img src="img/inter-shirt.jpg" alt="Camiseta de Internazionale Milano">
        <h3>${shirt1.shirtName}- ${shirt1.season}</h3>
        <h3>$${shirt1.price}</h3>
        <button onclick="addShirtToCart(${shirt1.id})">Agregar al carrito</button>
    </div>    

    <div class="product-container">
        <img src="img/milan-shirt.jpg" alt="Camiseta de Milan">
        <h3>${shirt2.shirtName}- ${shirt2.season}</h3>
        <h3>$${shirt2.price}</h3>
        <button onclick="addShirtToCart(${shirt2.id})">Agregar</button>
    </div>

    <div class="product-container">
        <img src="img/juve-shirt.png" alt="Camiseta de Juventus">
        <h3>${shirt3.shirtName}- ${shirt3.season}</h3>
        <h3>$${shirt3.price}</h3>
        <button onclick="addShirtToCart(${shirt3.id})">Agregar</button>
    </div>

    <div class="product-container">
        <img src="img/city-shirt.png" alt="Camiseta del Manchester City">
        <h3>${shirt4.shirtName}- ${shirt4.season}</h3>
        <h3>$${shirt4.price}</h3>
        <button onclick="addShirtToCart(${shirt4.id})">Agregar</button>
    </div>


    <div class="product-container">
        <img src="img/united-shirt.png" alt="Camiseta del Manchester Utd">
        <h3>${shirt5.shirtName}- ${shirt5.season}</h3>
        <h3>$${shirt5.price}</h3>
        <button onclick="addShirtToCart(${shirt5.id})">Agregar</button>
    </div>


    <div class="product-container">
        <img src="img/madrid-shirt.webp" alt="Camiseta de Real Madrid">
        <h3>${shirt6.shirtName}- ${shirt6.season}</h3>
        <h3>$${shirt6.price}</h3>
        <button onclick="addShirtToCart(${shirt6.id})">Agregar</button>
    </div>


    <div class="product-container">
        <img src="img/barcelona-shirt.png" alt="Camiseta de Barcelona">
        <h3>${shirt7.shirtName}- ${shirt7.season}</h3>
        <h3>$${shirt7.price}</h3>
        <button onclick="addShirtToCart(${shirt7.id})">Agregar</button>
    </div>

    <div class="product-container">
        <img src="img/atletico-shirt.jpg" alt="Camiseta de Atletico Madrid">
        <h3>${shirt8.shirtName}- ${shirt8.season}</h3>
        <h3>$${shirt8.price}</h3>
        <button onclick="addShirtToCart(${shirt8.id})">Agregar</button>
    </div>

    <div class="product-container">
        <img src="img/porto-shirt.png" alt="Camiseta de Porto">
        <h3>${shirt9.shirtName}- ${shirt9.season}</h3>
        <h3>$${shirt9.price}</h3>
        <button onclick="addShirtToCart(${shirt9.id})">Agregar</button>
    </div>

    <div class="product-container">
        <img src="img/benfica-shirt.png" alt="Camiseta de Benfica">
        <h3>${shirt10.shirtName}- ${shirt10.season}</h3>
        <h3>$${shirt10.price}</h3>
        <button onclick="addShirtToCart(${shirt10.id})">Agregar</button>
    </div>

    <div class="product-container">
        <img src="img/bvb-shirt.png" alt="Camiseta de Borussia Dortmund">
        <h3>${shirt11.shirtName}- ${shirt11.season}</h3>
        <h3>$${shirt11.price}</h3>
        <button onclick="addShirtToCart(${shirt11.id})">Agregar</button>
    </div>

    <div class="product-container">
        <img src="img/bayernMunchen-shirt.png" alt="Camiseta de Bayern Munchen">
        <h3>${shirt12.shirtName}- ${shirt12.season}</h3>
        <h3>$${shirt12.price}</h3>
        <button onclick="addShirtToCart(${shirt12.id})">Agregar</button>
    </div>

</div>`
})

document.getElementById('card-container').innerHTML = acumulador



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
    cards(newFilter)
}

// Funcion MOSTRAR TODOS LOS PRODUCTOS
function showAllTheProducts(all){
    const newFilter2 = shirts.filter((shirt) => shirt.all == all)
    cards(newFilter2)
}

// Funcion AGREGAR al CARRITO
function addShirtToCart(id) {
    const shirtIdFound = shirts.find((shirt) => shirt.id == id);
    cart.push(shirtIdFound);
    const totalCart = cart.reduce((acumulador, shirt) => acumulador + shirt.price, 0);
    document.getElementById("cartShirt").innerHTML = cart.length + "- $" + totalCart;
}





// Metodos de busqueda y transformacion

const existing = shirts.some (shirt =>shirt.season === "23/24")
console.log(existing)

const filter = shirts.filter(shirt =>shirt.price <= 8299)
console.log(filter)

const totalPrice = shirts.reduce((acc,el) => acc + el.price,0)
console.log("Precio total de todas las camisetas (Incuido IVA): " + totalPrice * iva)

// TODO: hacer un totalPrice2 para sumar el precio + IVA de todo aquello que el usuario compre









