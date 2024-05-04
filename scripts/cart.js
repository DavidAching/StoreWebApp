console.log("cart.js");
const productscartSelector = document.getElementById("cartproducts");
const resumenSelector = document.getElementById("resumeProducts");

let cart = JSON.parse(localStorage.getItem("cart"));

function createCart(cart) {
    return `
    <div class="cartProductDetails">
    <div class="img">
      <img src="${cart.image}" style="width: 100px;" alt="">
    </div>
    <div class="details">
      <p style="font-weight: 800;margin: 0;">${cart.title}</p>
      <p style="margin: 0;">This phone is unlocjed and compatible with any carrier of choice</p>
      <div class="inputResumenCart">
        <input type="number" value="${cart.quantity}" min="1">
      </div>
    </div>
    <div class="precio">
      <p id="bold">S/ ${(cart.price * cart.quantity )}</p>
    </div>
  </div>`;
}
let productcartTemplate = "";
productscartSelector.innerHTML = productcartTemplate;
let resumecartTemplate = "";
resumenSelector.innerHTML = resumecartTemplate;

function createResumen(cart) {
    return `
    <p class="productlistcart" style="font-size:12px">${cart.title} <span style="font-weight: bold;">S/. ${cart.price}</span></p>
    `;
}


function printCart(arrayOfProducts, idSelector) {
    let productcartTemplate = "";  
    let resumecartTemplate = ""
    for (const element of arrayOfProducts) {
        console.log(element);
        productcartTemplate = productcartTemplate + createCart(element);
        resumecartTemplate = resumecartTemplate + createResumen(element);
    }
    let cartProductsSelector = document.getElementById(idSelector)
    let resumenSelector = document.getElementById("resumeProducts");
    cartProductsSelector.innerHTML = productcartTemplate;
    resumenSelector.innerHTML = resumecartTemplate;
}

printCart(cart, "cartproducts");