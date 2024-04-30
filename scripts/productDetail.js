const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
console.log(id);
const product = products.find((each) => each.id === id);
console.log(product.price);




// console.log(products.images.id);

/* #region  FUNCION DE IMPRESION DE LOS DATOS DE PRODUCTO EN HTML DESDE JAVASCRIPT */
function printDetails(id) {
  const product = products.find((each) => each.id === id);
  const detailsTemplate = `
  <div class="product-images-block">
  <div class="product-images-little">
    ${product.images
      .map((each) => `<img onclick="changeMini(this)" src="${each}" width="50px alt="mini" />`)
      .join("")}
  </div>
  <div class="product-image">
    <img id="bigImg" src="${product.img}" width="300px" height="280px" alt="">
  </div>
</div>
<div class="product-description-block">
  <h1 class="title">${product.title}</h1>
  <form class="selector">
    <fieldset>
        <label class="label" for="color">Color</label>
        <select type="text" placeholder="Selecciona un color">
         ${product.colors
           .map((each) => `<option value=${each}>${each}</option>`)
           .join("")}
      </select>
    </fieldset>
  </form>

  <div class="description">
    <h1>Descripción:</h1>
    <p>
    ${product.description}
    </p>
  </div>
</div>
<div class="product-checkout-block">
  <div class="product-checkout-container">
    <p class="total">Total:</p>
    <h2 class="finalprice">S/.${product.price}</h2>
    <p class="impuestos">Incluye Impuesto PAIS y percepción AFIP. Puedes recuperar PEN S/.50711 haciendo la solicitud en AFIP.</p>
    <div class="opciones-extras">
      <div class="op1">
        <i class="fa-solid fa-truck"></i>
        <p>Agrega el producto al carrito para conocer los costos de envío</p>
      </div>
      <div class="op2">
        <i class="fa-solid fa-plane"></i>
        <p>Recibe aproximadamente entre 10 y 15 dias habiles, seleccionando envío normal</p>
      </div>
    </div>
    <div class="add-cart">
      <input type="number" name="" onchange="changeSubtotal(this, ${product.price})" placeholder="1">
      <button type="button">Añadir al carrito</button>
    </div>
    <div class="add-cart" id="subTotal">
        <div class="add-cart">
          <p>El total es : <span id="precioFinal"> </span> </p>
        </div>
    </div>
  </div>
</div> 
    `;
  const detailsSelector = document.querySelector("#detail-container");
  detailsSelector.innerHTML = detailsTemplate;

}
/* #endregion */

printDetails(id);


function changeMini(item) {
  const selectedSrc = item.src;
  const bigSelector = document.querySelector("#bigImg");
  bigSelector.src = selectedSrc;
}


function changeSubtotal (input, precio) {
  totalCompra = input.value;
  console.log(totalCompra);
  subTotal = precio * totalCompra;
  console.log(subTotal);
  refreshScreen = document.querySelector("#precioFinal")
  console.log(refreshScreen);
  refreshScreen.textContent = subTotal;
}