class Product {
    constructor (title, description, price, discount, policy, img){
        this.title = title,
        this.escription = description,
        this.price = price,
        this.discount = discount,
        this.policy = policy,
        this.img = img
    }
}


let products = [
    new Product("Macbook Pro 15'4", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product("Tablet", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product("Audifonos", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product("Teclado", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product("Mouse", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product("Microfono", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg")
]


// let products  = [
//     {title: "Macbook Pro 15'4", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Tablet", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Audifonos", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Teclado", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Mouse", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Microfono", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
// ];