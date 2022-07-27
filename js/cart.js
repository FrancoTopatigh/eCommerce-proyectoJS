let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")

let basket = JSON.parse(localStorage.getItem("shirtsInCart")) || []

// let calculation = () => {
//     let cartIcon = document.getElementById("cartAmount");
//     cartIcon.innerHTML = shirts.map((x) => x.item).reduce((x, y) => x + y, 0);
// }

// calculation();

// MUESTRA LA CANTIDAD DE PRODUCTOS EN EL CARRITO
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

onLoadCartNumbers();

let generateCartItems = () => {
    if (basket.length !== 0){
    } else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2>El carrito está vacio</h2>
        <a href="../index.html">
        <button class="btnIndex">Volver al inicio</button>
        </a>
        `
    }
};

generateCartItems();