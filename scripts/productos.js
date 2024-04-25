class Product {
    constructor (id,title, description, price, discount, policy, img){
        this.id = id,
        this.title = title,
        this.escription = description,
        this.price = price,
        this.discount = discount,
        this.policy = policy,
        this.img = img
    }
}


let products = [
    new Product(203423,"Macbook Pro 15'4", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product(203425,"Tablet", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product(203428,"Audifonos", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product(203421,"Teclado", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product(203420,"Mouse", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product(203422,"Mouse Pad", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product(203424,"Lenovo pro", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product(203429,"Speaker JBL", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product(203427,"Xbox pc Joystick", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product(203431,"Monitor", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
    new Product(203423,"Placa base", "Space Gray", "$750.000", "50% Off","Incluye impuesto País","./assets/mock1.jpg"),
]


// let products  = [
//     {title: "Macbook Pro 15'4", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Tablet", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Audifonos", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Teclado", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Mouse", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Microfono", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
// ];