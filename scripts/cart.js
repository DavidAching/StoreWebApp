console.log("cart.js");
const productscartSelector = document.getElementById("cartproducts");
const resumenSelector = document.getElementById("resumeProducts");

let cart = JSON.parse(localStorage.getItem("cart"));


if (cart != null) {
  function createCart(cart) {
    console.log(cart);
    return `
      <div class="cartProductDetails">
          <div class="img">
              <img src="${cart.image}" style="width: 100px;" alt="">
          </div>
          <div class="details">
              <p style="font-weight: 800;margin: 0;">${cart.title}</p>
              <p style="margin: 0;">This phone is unlocked and compatible with any carrier of choice</p>
              <div class="inputResumenCart">
                  <input id="${cart.id}" onchange="changeQuantity(event)" type="number" value="${cart.quantity}" min="1" max="10">
              </div>
          </div>
          <div class="precio">
              <p id="bold">S/ <span id="${cart.id}-subtotal">${cart.price * cart.quantity}</span></p>
          </div>
          <i style="height: fit-content;" onclick="deleteProductls(${cart.id})" class="fa-solid fa-xmark"></i>
      </div>`;
  }

  let productcartTemplate = "";
  productscartSelector.innerHTML = productcartTemplate;
  let resumecartTemplate = "";
  resumenSelector.innerHTML = resumecartTemplate;
  function createResumen(cart) {
    // console.log(cart);
    return `
      <p class="productlistcart" style="font-size:12px">${
        cart.title
      } <span id="${cart.id}-total" style="font-weight: bold;">S/.${
      cart.price * cart.quantity
    } </span></p>
      `;
  }
  function printCart(arrayOfProducts, idSelector) {
    let productcartTemplate = "";
    let resumecartTemplate = "";
    for (const element of arrayOfProducts) {
      // console.log(element);
      productcartTemplate = productcartTemplate + createCart(element);
      resumecartTemplate = resumecartTemplate + createResumen(element);
    }
    let cartProductsSelector = document.getElementById(idSelector);
    let resumenSelector = document.getElementById("resumeProducts");
    cartProductsSelector.innerHTML = productcartTemplate;
    resumenSelector.innerHTML = resumecartTemplate;
  }
  printCart(cart, "cartproducts");
} else {
  const productoCardSelector = document.getElementById("cartproducts");
  productoCardSelector.textContent = "NO HAY PRODUCTOS EN EL CARRITO.";
  productoCardSelector.style.fontWeight = "bold";
  
}

function changeQuantity(evento) {
  console.log(evento);

  let idProduct = Number(evento.target.id);
  let quantityProduct = Number(evento.target.value);

  let producto = cart.find((product) => product.id === idProduct);
  producto.quantity = quantityProduct;
  localStorage.setItem("cart", JSON.stringify(cart));

  //ACTUALIZANDO SUBTOTAL DEL PRODUCTO
  const subtotalSelector = document.getElementById(`${idProduct}-subtotal`);
  subtotalSelector.textContent = producto.quantity * producto.price;
  const totalCarritSelector = document.getElementById(`${idProduct}-total`);
  totalCarritSelector.textContent = `S/. ${producto.quantity * producto.price}`;

  //ACTUALIZANDO PRECIO TOTAL
  const precioTotalSelector = document.getElementById("totalAPagar");

  let total = 0;
  cart.forEach((each) => (total = total + each.price * each.quantity));
  precioTotalSelector.textContent = total;
}
