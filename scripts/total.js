const subtotalSelector = document.getElementById("subtotalPrecio")


function createTotalTemplate(arrayOfProducts) {
    let total = 0;
    arrayOfProducts.forEach(
      (each) => (total = total + each.price * each.quantity)
    );
    return `
    <p id="bold">Subtotal</p>
    <p id="bold">S/. <span id="totalAPagar" >${total} </span>  </p>
    `;
}


subtotalSelector.innerHTML = createTotalTemplate(cart);
