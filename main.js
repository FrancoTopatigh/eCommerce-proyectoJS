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
function showAllTheProducts(show){
    const newFilter2 = shirts.filter((shirt) => shirt.show == show)
    cards(newFilter2)
}


function addShirtToCart(id) {
    const shirtIdFound = shirts.find(shirt => shirt.id == id);
    cart.push(shirtIdFound);
}

function showCurrentCart (){
}

function confirmPurchase() {
    const answer = prompt("Desea comprar alguna camiseta de nuestro catálogo?\n1) Si, deseo ver su stock \n2) No, quiero volver al sitio web");
    if (answer  == "1"){
        return true;
    } else {
        return false;
    }
} 

function showShirts() {
    let menuShow = "¿Que camiseta le gustaría comprar, " + name + "?\n";
    shirts.forEach(shirt => {
        menuShow += `${shirt.id}) ${shirt.shirtName} - ${shirt.season} - ${shirt.price * iva}\n`;
        // TODO: agregar un MATH.CEIL de la suma de shirt price * iva, para que no de tantos decimales
        // TODO: Agregar ALERT cuando el usuario selecciona un producto
    })
    let answer = prompt(menuShow);
    return answer;
}

// Sin esta funcion, no se muestran las demas
function buyShirt() {
    while (confirmPurchase()) {
        let shirtSelected = showShirts();
        addShirtToCart(shirtSelected);
        showCurrentCart();
    }
}

buyShirt();

// CARDS
// TODO: PASAR TODO A DOM 
function cards(showAllTheProducts){
    let acumulador = ``;
    showAllTheProducts.forEach((product) => {
        acumulador += ``
    })
}




// Metodos de busqueda y transformacion

const existing = shirts.some (shirt =>shirt.season === "23/24")
console.log(existing)

const filter = shirts.filter(shirt =>shirt.price <= 8299)
console.log(filter)

const totalPrice = shirts.reduce((acc,el) => acc + el.price,0)
console.log("Precio total de todas las camisetas (Incuido IVA): " + totalPrice * iva)

// TODO: hacer un totalPrice2 para sumar el precio + IVA de todo aquello que el usuario compre









