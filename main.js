// IVA

const iva = 1.21;

// CART + JSON
const cartStorage = localStorage.getItem('cart');
let cart = JSON.parse(cartStorage) ?? [];

// CLASS AND CONSTRUCTOR

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

// OBJECTS

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


// ARRAY
const shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12];



showCards(shirts)

// DOM - CARDS
function showCards(shirtsToShow){
        let acumulador = ``;
        shirtsToShow.forEach((shirt) => {
            acumulador += `<div class="page-content">
                            <div class="product-container">
                            <img src=${shirt.img} alt=${shirt.name} class="product-img">
                            <div class="h3 product-title">${shirt.name} - ${shirt.season}</div>
                            <span class="price">$${shirt.price}</span>
                            <i class='bx bx-shopping-bag add-cart' id="btnAddToCart" onclick="addShirtToCart(${shirt.id})"></i>
                            </div>    
                            </div>`
                        })
                        document.getElementById('card-container').innerHTML = acumulador
                    }

// SOME FUNCTIONS

//  FILTER BY LEAGUE
function filterByLeague(league){
    const newFilter = shirts.filter((shirt) => shirt.league == league)
    showCards(newFilter);
}

// FUNCTION TO SHOW EVERY SHIRT
function showAllTheProducts(all){
    const newFilter2 = shirts.filter((shirt) => shirt.all == all);
    showCards(newFilter2);
}

// FUNCTION ADD TO CART 
function addShirtToCart(id) {
    // SEARCH PRODUCT ON OUR DB
    const shirtIdFound = shirts.find((shirt) => shirt.id == id);
    // ADD SHIRT TO CART
    cart.push(shirtIdFound);
    // ADD SHIRT TO LOCALSTORAGE
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
    // CALCULATE PRICE OF EVERY SHIRT
    const totalCart = cart.reduce((acumulador, shirt) => acumulador + shirt.price, 0);
    // SHOW CHANGES MADE ABOUT PRICE IN OUR PAGE THROUGH HTML
    document.getElementById("cartShirt").innerHTML = cart.length + "- $" + totalCart;
    // TOASTIFY
    Toastify({
        text: "Se agregó al carrito!",
        duration: 4000,
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
}

let carts = document.querySelectorAll("#btnAddToCart")

for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(shirts[i])
        totalCost(shirts[i])
    })
}


// FUNCTION - SHOWS QUANTITY OF PRODUCTS IN OUR CART
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector(".cartAmount").textContent = productNumbers;
    }
}

// FUNCTION CART NUMBERS
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

// FUNCTION - SHOWS PRODUCTS IN STORAGE
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


// TOTAL COST PRODUCTS
function totalCost(shirt){
    let cartCost = localStorage.getItem("totalCost");


    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + shirt.price)
    } else{
        localStorage.setItem("totalCost",shirt.price)
    }
}

onLoadCartNumbers();

// --------------------------------------------------------

let cartIcon = document.querySelector("#cart-icon");
let cart2 = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// OPEN POPUP
cartIcon.onclick = () => {
    cart2.classList.add("active")
}
// CLOSE POPUP
closeCart.onclick = () => {
    cart2.classList.remove("active")
}

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else{
    ready();
}

// FUNCTION 
function ready(){
    // REMOVE ITEM FROM CART
    let removeCartButton = document.getElementsByClassName("cart-remove");
    for (let i = 0; i < removeCartButton.length; i++){
        let button = removeCartButton[i]
        button.addEventListener("click", removeCartItems);
    }
    // QUANTITY CHANGES
    let quantityInputs = document.getElementsByClassName("cart-quantity");
    for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }   
        // Add to cart
        let addToCart = document.getElementsByClassName("add-cart")
        for (let i = 0; i < addToCart.length; i++){
            let button = addToCart [i];
            button.addEventListener("click", addCartClicked)
        }
        // Buy Button Work
        document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked)
}
// Buy Button
function buyButtonClicked(){
    swal({
        title: "Felicidades!",
        text: "Gracias por comprar en Canebola! \n En breve te llegará la orden de compra a tu email",
        icon: "success",
        button: "Cerrar",
    });
    let cartContent = document.getElementsByClassName("cart-content")[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
    updateTotal()
}

// REMOVE SHIRTS FROM CART
function removeCartItems(event){
    let buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updateTotal();
}
// QUANTITY CHANGES FUNCTION
function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}
function addCartClicked(event){
    const button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    let price = shopProducts.getElementsByClassName("price")[0].innerText;
    let productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    updateTotal();
}
function addProductToCart(title, price, productImg){
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    let cartItems = document.getElementsByClassName("cart-content")[0];
    let cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (let i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
        alert("El producto ya fue agregado al carrito")
        return;
        }
    }
const cartBoxContent = 
                        `<img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- Remove Cart -->
                        <i class='bx bxs-trash-alt cart-remove'></i> `
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItems);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}
// UPDATE TOTAL
function updateTotal(){
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0
    for (let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName("cart-price")[0];
        let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value;
        total = total + (price * quantity * iva);
    }
        // IF price contain some cents value...
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = " (+ IVA 21%) = " + "$ " + total ;
}

