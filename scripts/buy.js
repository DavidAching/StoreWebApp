console.log("coneccted to buy.js"); //CORRECT CONNECTION

//Connected to cart.js
//The functions written below work inside the functions: createCart(cart) inside cart.js(27)

//Allows you to remove an item from your shopping cart.
function deleteProductls(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(`this is the value of the id : ${id}`);
  const index = cart.findIndex((product) => product.id === id);
  if (index !== -1) {
      cart.splice(index, 1);
      console.log(cart.length);
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log(`The item with ID ${id} has been removed from your cart.`);
  } else {
      console.log(`No items with ID ${id} were found in the cart.`);
  }
}


//AGREGA A FAVORITOS A UN PRODUCTO

function toggleFavorite(id, element) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(product => product.id === id.toString());
    
    if (product) {
      product.liked = product.liked === "1" ? "0" : "1";
      localStorage.setItem('products', JSON.stringify(products));
      
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

function cleanCart() {
    
}