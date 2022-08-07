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

// SHOPPING CART 

const addToShoppingCartButtons = document.querySelectorAll(".add-cart");
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", addToCartClicked)
})

const confirmPurchaseButton = document.querySelector(".buyButton");
confirmPurchaseButton.addEventListener("click", confirmPurchaseClicked);

const emptyCartButton = document.querySelector(".emptyCart");
emptyCartButton.addEventListener("click", emptyCart);

const shoppingCartItemsContainer = document.querySelector(".shoppingCartItemsContainer");

function addToCartClicked(event){
    const button = event.target;
    const item = button.closest(".product-container")
    const shirtTitle = item.querySelector(".product-title").textContent;
    const shirtPrice = item.querySelector(".price").textContent;
    const shirtImg = item.querySelector(".product-img").src;
    addItemsToShoppingCart(shirtTitle, shirtPrice, shirtImg)
}

function addItemsToShoppingCart(shirtTitle, shirtPrice, shirtImg){
    const elementTitle = shoppingCartItemsContainer.getElementsByClassName("shoppingCartItemTitle")
    for(let i = 0; i < elementTitle.length; i++){
        if(elementTitle[i].innerText === shirtTitle){
            let elementQuantity = elementTitle[i].parentElement.parentElement.parentElement.querySelector(".shoppingCartItemQuantity")
            elementQuantity.value++;
                // TOASTIFY
                Toastify({
                    text: "Se aumentó correctamente la cantidad",
                    duration: 4000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                    background: "rgb(109, 155, 218)",
                    color: "black"
                    },
                    onClick: function(){}
                }).showToast();

            updateShoppingCartTotal()
            return;
        }
    }

    const shoppingCartRow = document.createElement("div");
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6">
                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <img src=${shirtImg} class="shopping-cart-image">
                            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${shirtTitle}
                            </h6>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <p class="item-price mb-0 shoppingCartItemPrice">${shirtPrice}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div
                            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                                value="1">
                            <button class="btn btn-danger buttonDelete" type="button">X</button>
                        </div>
        </div>
    </div> `;
    shoppingCartRow.innerHTML = shoppingCartContent
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector(".buttonDelete").addEventListener("click", removeShoppingCartItem);
    shoppingCartRow.querySelector(".shoppingCartItemQuantity").addEventListener("change", quantityChanged)

    updateShoppingCartTotal();
}

// FUNCTION TO UPDATE PRICE
function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector(".shoppingCartTotal");  
    const shoppingCartItems = document.querySelectorAll(".shoppingCartItem");

    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector(".shoppingCartItemPrice");
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace("$", ""));
        const shoppingCartItemQuantityElement =shoppingCartItem.querySelector(".shoppingCartItemQuantity");
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value)
        
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity * iva
    })
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`
};

// FUNCTION TO REMOVE ITEMS
function removeShoppingCartItem(event){
    const buttonClicked = event.target
    buttonClicked.closest(".shoppingCartItem").remove();
    // TOASTIFY
    Toastify({
        text: "Se eliminó el producto",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
        background: "red",
        color: "black"
        },
        onClick: function(){}
    }).showToast();
    updateShoppingCartTotal();
}

// FUNCTION TO CHANGE QUANTITY OF ITEMS
function quantityChanged(event){
    const input = event.target
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
}

// FUNCTION TO CONFIRM PURCHASE OF ITEMS
function confirmPurchaseClicked(){
    shoppingCartItemsContainer.innerHTML = "";
    localStorage.removeItem("cart");
    localStorage.removeItem("shirtsInCart");
    localStorage.removeItem("cartNumbers");
    localStorage.removeItem("totalCost");
    updateShoppingCartTotal();
    Swal.fire({
        title: "Gracias por comprar en Canebola!",
        text: "En breve te llegará la orden de compra a tu email",
        icon: "success",
        button: "Cerrar",
    });
    let cartContent = document.getElementsByClassName("cart-content")[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
}

// FUNCTION EMPTY CART
function emptyCart(){
    shoppingCartItemsContainer.innerHTML = "";
    localStorage.removeItem("cart");
    localStorage.removeItem("shirtsInCart");
    localStorage.removeItem("cartNumbers");
    localStorage.removeItem("totalCost");
    updateShoppingCartTotal();
    Swal.fire({
        title: "Se vació el carrito",
        icon: "warning",
        button: "Cerrar",
    });
}
