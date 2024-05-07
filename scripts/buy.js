console.log("buy.js");




function deleteProductls(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(`este es el valor del id : ${id}`);
    let producto = cart.find((product) => product.id === id);
    if (cart.length >0) {
        cart.splice(producto, 1);
        console.log(cart.length);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`El objeto con ID ${id} ha sido eliminado del carrito.`);   
    } else {
        console.log(`No se encontró ningún objeto con ID ${id} en el carrito.`);
    }
}


function cleanCart() {
    
}