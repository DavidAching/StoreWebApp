const productsSelector = document.getElementById("products");

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



let productsTemplate = "";

productsSelector.innerHTML = productsTemplate;

function printCard(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
      productsTemplate = productsTemplate + createCard(element);
    }
    let productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
  }
  
  printCard(products, "products");

  
