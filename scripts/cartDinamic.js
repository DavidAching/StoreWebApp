console.log("cartDinamic.js");

const dinamicCartSelector = document.getElementById("dinamicCartNumber");

const cartNumberTemplate = `
<li><i class="fa-brands fa-facebook"></i></li>
<li><i class="fa-brands fa-instagram"></i></li>
<li class="dinamicCartStyle" style="position: relative;">
<a href="../cart.html"
    style="
        color: white;
    "
><i class="fa-solid fa-cart-shopping"></i>
<p id="numeroCarrito">${cart != null ? cart.length : '0'}</p>
</li></a>
`;

dinamicCartSelector.innerHTML = cartNumberTemplate;

// console.log(dinamicCartSelector);



// console.log(cart);

function createDinamicCart(totalProducts) {
    // console.log("total products " + totalProducts.length);
    //Recuperamos la etiqueta con el id numeroCarrito que se encuentra dentro del cartNumberTemplate
    const dinamicCartSelector = document.getElementById("numeroCarrito");
    // console.log(dinamicCartSelector);
    //Modificamos el valor con el que obtenemos por parametro al llamar la funcion
    dinamicCartSelector.textContent = `${totalProducts.length}`;
}


