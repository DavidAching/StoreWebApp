console.log("favoritos.js");
const favoriteproductsSelector = document.getElementById("favoriteProducts");

function createfavoriteCard(product) {

    // console.log(product.id);
  return `
    <a class="product-card" id="a-card" href="./details.html?id=${product.id}">
    <img class="product-img" src="${product.img}" alt="Macbook Pro" />
    <div class="product-info">
      <span class="product-title">${product.title}</span>
      <span class="product-description">${product.colors}</span>
      <div class="product-price-block">
        <span class="price">${product.price}</span>
        <span class="discount">${product.discount}</span>
      </div>
      <div class="product-tax-policy">${product.policy}</div>
    </div>
  </a>
    `;
}

console.log("entra aqui");

let favoriteproductsTemplate = "";

favoriteproductsSelector.innerHTML = productsTemplate;

function printFavoriteCard(arrayOfProducts, idSelector) {
    let favoriteproductsTemplate = "";
    for (const element of arrayOfProducts) {
        if (element.liked == 1) {
           favoriteproductsTemplate = favoriteproductsTemplate + createfavoriteCard(element); 
        } else {
            console.log("no hay productos en favoritos");
        }
        
    }
    let favoriteproductsSelector = document.getElementById(idSelector);
    favoriteproductsSelector.innerHTML = favoriteproductsTemplate;
  }
  
  printFavoriteCard(products, "favoriteProducts");


function agregarFavorito(idproducto) {
  console.log("entro a la funcion");  
}