
const searchSelector = document.querySelector("#search");

searchSelector.addEventListener("keyup", event => filterProducts(event));

function filterProducts(event) {
    const productSearch = event.target.value.toLowerCase();
    const search =  products.filter( Product => Product.title.toLowerCase().includes(productSearch) );
    printCard(search, "products");
}

