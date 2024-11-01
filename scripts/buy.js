console.log("coneccted to buy.js"); //CORRECT CONNECTION

//Connected to cart.js
//The functions written below work inside the functions: createCart(cart) inside cart.js(27)

//Allows you to remove an item from your shopping cart.
function deleteProductls(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const numericId = Number(id); // Convertir id a número
  const index = cart.findIndex((product) => product.id === numericId);

  if (index !== -1) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log(`El producto con ID ${id} ha sido eliminado del carrito.`);
      
      // Actualizar la vista del carrito y el subtotal
      printCart(cart, "cartproducts");
      actualizarSubtotal(cart);
      
      // Actualizar el número en el icono del carrito
      actualizarNumeroCarrito(cart);
  } else {
      console.log(`No se encontró ningún producto con ID ${id} en el carrito.`);
  }
}

//AGREGA A FAVORITOS A UN PRODUCTO

function toggleFavorite(id, element) {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const product = products.find(product => product.id === id.toString());
  
  if (product) {
      product.liked = product.liked === "1" ? "0" : "1";
      localStorage.setItem('products', JSON.stringify(products)); // Asegura que se guarde correctamente

      // Actualizar el ícono visualmente
      if (product.liked === "1") {
          element.classList.remove('fa-regular');
          element.classList.add('fa-solid');
      } else {
          element.classList.remove('fa-solid');
          element.classList.add('fa-regular');
      }
      
      console.log(`Producto ${id} ${product.liked === "1" ? 'añadido a' : 'removido de'} favoritos`);
  } else {
      console.log(`Producto ${id} no encontrado`);
  }
}


function finalizarCompra() {
  // Vaciar el carrito en localStorage
  localStorage.removeItem("cart");

  // Mostrar mensaje de confirmación
  alert("Compra finalizada con éxito. ¡Gracias por tu compra!");

  // Recargar la página para actualizar el carrito vacío
  location.reload();
}

function actualizarNumeroCarrito(carrito) {
  const dinamicCartSelector = document.getElementById("numeroCarrito");
  dinamicCartSelector.textContent = carrito.length;
}