let basket = JSON.parse(localStorage.getItem("shirtsInCart") || [])

console.log(basket)

// MUESTRA LA CANTIDAD DE PRODUCTOS EN EL CARRITO
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

onLoadCartNumbers();