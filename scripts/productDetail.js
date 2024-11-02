const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
const product = products.find((each) => each.id === id);


// console.log(products.images.id);

/* #region  FUNCION DE IMPRESION DE LOS DATOS DE PRODUCTO EN HTML DESDE JAVASCRIPT */
function printDetails(id) {
  const product = products.find((each) => each.id === id);
  const isFavorite = product && product.liked === "1";
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
        <select id= "color-${product.id}" type="text" placeholder="Selecciona un color">
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
    <input type="number" min="1" max="10" id="quantity-${product.id}" onchange="changeSubtotal(this, ${product.price})">
    <button onclick="saveProduct(${product.id})" style="cursor:pointer;" type="button">Añadir al carrito</button>
    
    <!-- Ícono de favorito -->
    <button style="background: none; border: none; cursor: pointer; margin-left: 10px;">
        <i id="fav-${product.id}" class="${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart favoriteIcon" onclick="toggleFavorite('${product.id}', this)" aria-hidden="true"></i>
    </button>
</div>
    <div class="add-cart" id="subTotal">
        <div class="add-cart">
          <p style="display:none;align-items: center;" id="subtotalPrice">El sub total es : <span style="font-weight: bold;font-size:20px;" id="precioFinal"> </span> </p>
          <p id="nonePrice">El sub total es : <span style="font-weight: bold;font-size:20px;">S/. ${product.price} </span> </p>
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

//#region CAMBIO DE IMAGEN DESDE MINIATURA
/* funcion que permite el cambio de la imagen del producto en #bigImg y esta se
ejecuta desde la misma etiqueta con un llamado al onclick
*/
function changeMini(item) { // lo que recibe por parametro es el contexto, en este caso la etiqueta misma <img>
  const selectedSrc = item.src; // La variable selectedSrc contendrá el contenido de la propiedad source de la etiqueta <img>
  const bigSelector = document.querySelector("#bigImg"); // Instancia a la etiqueta con id bigImg
  bigSelector.src = selectedSrc; //A la propiedad src de la instancia de la etiqueta le asignaremos el contenido de la variable selectedSrc
}
//#endregion


/* Funcion que permite */
function changeSubtotal (input, precio) {
  totalCompra = input.value;
  subTotal = precio * totalCompra;
  pSelectorNone = document.querySelector("#nonePrice");
  pSelectorNone.style.display = "none";
  pSelector = document.querySelector("#subtotalPrice");
  pSelector.style.display = "inline-flex";
  refreshScreen = document.querySelector("#precioFinal");
  console.log(refreshScreen.style.display);
  refreshScreen.textContent = `S/. ${subTotal}.000`;
}



function saveProduct(id) {
  // Verificar si el usuario ha iniciado sesión
  const isOnline = sessionStorage.getItem("isOnline");

  if (isOnline === "true") {
      // Obtener el carrito actual del Local Storage o inicializar un array vacío si no existe
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      // Buscar el producto en el carrito por su ID
      const foundProduct = existingCart.find((product) => product.id == id);

      if (foundProduct) {
          // Si el producto ya está en el carrito, aumenta la cantidad
          foundProduct.quantity += Number(document.querySelector("#quantity-" + id).value);
      } else {
          // Si el producto no está en el carrito, agregarlo como un nuevo producto
          const found = products.find((each) => each.id == id);
          if (found) {
              const product = {
                  id: id,
                  title: found.title,
                  price: Number(found.price),
                  image: found.images[0],
                  color: document.querySelector("#color-" + id).value,
                  quantity: Number(document.querySelector("#quantity-" + id).value)
              };
              existingCart.push(product);
          }
      }

      // Guardar el carrito actualizado en el Local Storage
      localStorage.setItem("cart", JSON.stringify(existingCart));

      alert("Producto agregado al carrito con éxito.");
      let cart = JSON.parse(localStorage.getItem("cart"));
      createDinamicCart(cart);

  } else {
      // Mostrar alerta si el usuario no ha iniciado sesión
      alert("Por favor, inicia sesión para agregar productos al carrito.");
  }
}




// function saveProduct (id) {
//   console.log("ingreso a la funcion");
//   console.log(id);

//   const found = products.find((each) => each.id == id);
//   console.log(found);

//   const product = {
//     id: id,
//     title: found.title,
//     price: found.price,
//     image: found.images[0],
//     color: document.querySelector("#color-" + id).value,
//     quantity: document.querySelector("#quantity-" + id).value,
//   };
//   const stringifyProduct = JSON.stringify(product);
//   localStorage.setItem(`cart`, stringifyProduct);
// }