// IVA

const iva = 1.21;

// CARRITO VARIABLE + JSON
const cartStorage = localStorage.getItem('cart');
let cart = JSON.parse(cartStorage) ?? [];


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

showCards(shirts)

// DOM - CARDS
function showCards(shirtsToShow){
        let acumulador = ``;
        shirtsToShow.forEach((shirt) => {
            acumulador += `<div class="page-content">
                            <div class="product-container">
                            <img src=${shirt.img} alt=${shirt.name}>
                            <h3>${shirt.name} - ${shirt.season}</h3>
                            <h3>$${shirt.price}</h3>
                            <button class="btnAddToCart" onclick="addShirtToCart(${shirt.id})">Agregar al carrito</button>
                            <button class="btnAddToFav" id="addToFav">Agregar a Favoritos</button>
                            </div>    
                            </div>`
    })
    document.getElementById('card-container').innerHTML = acumulador
}

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

    // Agregamos el producto al localStorag
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);

    // Calcular el total de los productose
    const totalCart = cart.reduce((acumulador, shirt) => acumulador + shirt.price, 0);

    // Mostrar en el html la actualizacion de los valores cambiados
    document.getElementById("cartShirt").innerHTML = cart.length + "- $" + totalCart;

    // SWEET ALERT
    swal({
        title: "Felicidades!",
        text: "El producto fue agregado al carrito exitosamente!",
        icon: "success",
        button: "Cerrar",
    });
}


// EVENTO - BUTTON
const btnAddToFav = document.querySelectorAll("#addToFav");
btnAddToFav.forEach(function(btnFav){
    btnFav.addEventListener('click', function (){
        Toastify({
                    text: "Se agregó a favoritos!",
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                    background: "black",
                    color: "white"
                    },
                    onClick: function(){}
                }).showToast();
    })
})


let carts = document.querySelectorAll(".btnAddToCart")

for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(shirts[i])
    })
}


// FUNCION QUE MUESTRA LOS PRODUCTOS EN EL CARRITO
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

// FUNCION CART NUMBERS - Muestra la cantidad de productos que tenemos en el carrito 
function cartNumbers(shirt){
    let productNumbers = localStorage.getItem("cartNumbers")
    productNumbers = parseInt(productNumbers)
    localStorage.setItem("cartNumbers", 1)

    if (productNumbers){
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelectorAll(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelectorAll(".cart span").textContent = 1;
    }

    setItems(shirt)
}

// FUNCION MUESTRA PRODUCTOS EN STORAGE
function setItems(shirt){
    let cartItems = localStorage.getItem('shirtsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[shirt.name] == undefined){
            cartItems = {
                ...cartItems,
                [shirt.name]:shirt
            }
        }

        cartItems[shirt.name].inCart += 1;
    } else {
        shirts.inCart = 1;
        cartItems = {
            [shirt.name]: shirt
        }
    }
    localStorage.setItem("shirtsInCart", JSON.stringify(cartItems))
}

onLoadCartNumbers();










