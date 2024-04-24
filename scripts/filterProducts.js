
const searchSelector = document.querySelector("#search");

searchSelector.addEventListener("keyup", event => filterProducts(event, products, "products"));
// searchSelector.addEventListener("keydown", ()=>{
//     productsTemplate = productsTemplate + createCard(element);
// });




// console.log(`el searchSelector tiene: ${searchSelector}`);


function createCard(product) {
  return `
    <a class="product-card" href="./details.html">
    <img class="product-img" src="${product.img}" alt="Macbook Pro" />
    <div class="product-info">
      <span class="product-title">${product.title}</span>
      <span class="product-description">${product.description}</span>
      <div class="product-price-block">
        <span class="price">${product.price}</span>
        <span class="discount">${product.discount}</span>
      </div>
      <div class="product-tax-policy">${product.policy}</div>
    </div>
  </a>
    `;
}

function filterProducts(event, arrayOfProducts,idSelector) {

    const productsSelector = document.getElementById("products");

    let productSearch = event.target.value;
    // console.log(`el valor de event es ${productSearch}`);
    
    let productsTemplate = "";
    productsSelector.innerHTML = productsTemplate;
    console.log(`valor del event ${event.target.value.length}`);
    if (event.target.value.length > 0) {
        for (const element of arrayOfProducts) {
            // console.log(`valor de element ${element.title}`);
            if (productSearch == element.title) {
          productsTemplate = productsTemplate + createCard(element);
            }
        }
        productsSelector.innerHTML = productsTemplate;
    } else {
        console.log("entro al else");
        printCard(products, "products");
    }
    
    
    

}


