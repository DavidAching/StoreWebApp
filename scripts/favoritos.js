console.log("favoritos.js");
let products = JSON.parse(localStorage.getItem('products')) || [];
console.log(`${products}`);
const favoriteproductsSelector = document.getElementById("favoriteProducts");


// function createfavoriteCard(product) {

//     // console.log(product.id);
//   return `
//     <a class="product-card" id="a-card" href="./details.html?id=${product.id}">
//     <img class="product-img" src="${product.img}" alt="Macbook Pro" />
//     <div class="product-info">
//       <span class="product-title">${product.title}</span>
//       <span class="product-description">${product.colors}</span>
//       <div class="product-price-block">
//         <span class="price">${product.price}</span>
//         <span class="discount">${product.discount}</span>
//       </div>
//       <div class="product-tax-policy">${product.policy}</div>
//     </div>
//   </a>
//     `;
// }



function createfavoriteCard(product) {
  return `
    <div class="product-card" id="favorite-${product.id}">
      <a class="product-link" href="./details.html?id=${product.id}">
        <img class="product-img" src="${product.img}" alt="${product.title}" />
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
      <div class="remove-favorite-container">
        <button class="remove-favorite" onclick="removeFavorite('${product.id}')">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `;
}

function printFavoriteCard(arrayOfProducts, idSelector) {
  let favoriteProductsTemplate = "";
  for (const element of arrayOfProducts) {
      if (element.liked === "1") { // Filtrar solo los productos con liked === "1"
          console.log(element);
          favoriteProductsTemplate += createfavoriteCard(element);
      }
  }
  const favoriteProductsSelector = document.getElementById(idSelector);
  favoriteProductsSelector.innerHTML = favoriteProductsTemplate;
}



function removeFavorite(productId) {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  let productIndex = products.findIndex(product => product.id === productId);
  if (productIndex !== -1) {
    products[productIndex].liked = "0";
    localStorage.setItem('products', JSON.stringify(products));
    document.getElementById(`favorite-${productId}`).remove();
    console.log(`Producto con ID ${productId} removido de favoritos`);
    console.log(products[productIndex]);
  }
}

printFavoriteCard(products, "favoriteProducts");

console.log("entra aqui");

let favoriteproductsTemplate = "";

favoriteproductsSelector.innerHTML = productsTemplate;
