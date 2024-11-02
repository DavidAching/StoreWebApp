// Asegúrate de que `cart` solo se define en un lugar, por ejemplo, en otro archivo JavaScript principal.
// Aquí simplemente usamos `cart` sin volver a declararla.
const isSessionActive = sessionStorage.getItem("isOnline") === "true";

// Si `cart` no está definida globalmente, la obtenemos de localStorage
window.cart = window.cart || JSON.parse(localStorage.getItem("cart")) || [];

const dinamicCartSelector = document.getElementById("dinamicCartNumber");

const cartNumberTemplate = `
<li><i class="fa-brands fa-facebook"></i></li>
<li><i class="fa-brands fa-instagram"></i></li>
${isSessionActive ? `
<li class="dinamicCartStyle" style="position: relative;">
  <a href="../cart.html" style="color: white;">
    <i class="fa-solid fa-cart-shopping"></i>
    <p id="numeroCarrito">${cart.length}</p>
  </a>
</li>
<li><i class="fa-solid fa-user-check"></i></li>
` : `
<li><i class="fa-solid fa-circle-user"></i></li>
`}
`;

dinamicCartSelector.innerHTML = cartNumberTemplate;

function createDinamicCart(totalProducts) {
    const dinamicCartSelector = document.getElementById("numeroCarrito");
    dinamicCartSelector.textContent = `${totalProducts.length}`;
}
