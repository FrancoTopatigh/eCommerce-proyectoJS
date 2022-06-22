// PROMPT DE BIENVENIDA
let name = prompt('Ingrese su nombre');
let age = parseInt(prompt('Ingrese su edad'));

if (name == ""){
    alert('No ha ingresado su nombre');   
} else{
    alert('Bienvenido, ' + name + "!")
}

console.log('Datos del usuario: ' + name +  ' ' + age + ' ' + 'años');
console.log('Gracias por elegirnos, ' + name + "!");


// IVA

const iva = 1.21;

// Class y constructor

class Shirt {
    constructor (id, shirtName, season, price) {
        this.id = id;
        this.shirtName = shirtName;
        this.season = season;
        this.price = price;
    }

    priceCalculator (){
        return this.price * iva;
    }
}

// Objetos

const shirt1 = new Shirt ("1", "Inter Visitante", "21/22", 7499);
const shirt2 = new Shirt ("2", "Milan Titular", "21/22", 7499);
const shirt3 = new Shirt ("3","Juventus Titular", "22/23", 7899);
const shirt4 = new Shirt ("4", "Liverpool Titular", "22/23", 8299);
const shirt5 = new Shirt ("5", "Manchester United", "21/22", 8499);
const shirt6 = new Shirt ("6", "Real Madrid", "22/23", 9499);
const shirt7 = new Shirt ("7", "Barcelona Titular", "22/23", 8999);
const shirt8 = new Shirt ("8", "Atletico de Madrid Titular", "21/22", 7999);
const shirt9 = new Shirt ("9","Racing Titular", "22/23", 7399);
const shirt10 = new Shirt ("10", "Boca Titular", "21/22", 7399);
const shirt11 = new Shirt ("11", "PSG Titular", "21/22", 9499);
const shirt12 = new Shirt ("12", "Borussia Dortmund Titular", "21/22", 8999);


// Array

const shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12];

let cart = [];

// Funciones

function addShirtToCart(id) {
    const shirtFound = shirts.find(shirt => shirt.id == id);
    cart.push(shirtFound);
}

function showCurrentCart (){

}

function confirmPurchase() {
    const answer = prompt("Desea comprar alguna camiseta de nuestro catalogo?\n1) Si \n2) No");
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
    })
    let answer = prompt(menuShow);
    return answer;
}


function buyShirt() {
    while (confirmPurchase()) {
        let shirtSelected = showShirts();
        addShirtToCart(shirtSelected);
        showCurrentCart();
    }
}

buyShirt();






