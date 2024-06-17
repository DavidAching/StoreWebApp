class Product {
  constructor(
    id,
    title,
    description,
    price,
    discount,
    policy,
    img,
    colors,
    images,
    liked
  ) {
      this.id = id,
      this.title = title,
      this.description = description,
      this.price = price,
      this.discount = discount,
      this.policy = policy,
      this.img = img,
      this.colors = colors,
      this.images = images,
      this.liked = liked;
  }
}

let products = [
  new Product(
    "203423",
    "Laptop Lenovo CoreTM I5",
    "Descubre la perfecta combinación de estilo y rendimiento con la MacBook Pro de 13.4 pulgadas. Equipada con un potente procesador, gráficos avanzados y un innovador sistema de refrigeración, esta portátil te permite realizar tus tareas más exigentes con fluidez y rapidez. Además, su impresionante pantalla Retina con tecnología True Tone ofrece colores vibrantes y detalles nítidos, mientras que el Touch Bar te brinda un acceso rápido a las herramientas que más utilizas. Con una construcción en aluminio premium y un teclado cómodo y preciso, la MacBook Pro 13.4 es la elección ideal para profesionales creativos y usuarios exigentes que buscan lo mejor en términos de diseño y desempeño en una computadora portátil.",
    "750.000",
    "50% Off",
    "Incluye impuesto País",
    "./assets/mock2.jpg",
    ["gris", "azul", "negro"],
    ["./assets/mock1.jpg", "./assets/mock2.jpg"],
    "1"
  ),
  new Product(
    "203425",
    "Tablet M9",
    "Descubre la potencia y versatilidad de la Tablet M9 con 4GB de RAM y una generosa capacidad de almacenamiento de 64GB. Conéctate sin problemas a tus redes favoritas a través de WiFi y protege tu dispositivo con el estuche tipo folio incluido, que ofrece estilo y seguridad a tu tablet M9.",
    "529.000",
    "33% Off",
    "Incluye impuesto País",
    "./assets/tablet2.jpg",
    ["negro"],
    ["./assets/tablet1.jpg", "./assets/tablet2.jpg"],
    "0"
  ),
  new Product(
    "203428",
    "Audífono Gamer HyperX",
    "Sumérgete en la experiencia de juego definitiva con los audífonos HyperX Cloud II Wireless en elegante color negro. Experimenta la libertad de movimientos sin sacrificar la calidad de sonido, gracias a su conexión inalámbrica. Con un diseño ergonómico y materiales de alta calidad, estos audífonos te ofrecen comodidad duradera durante largas sesiones de juego. Además, su avanzada tecnología de cancelación de ruido te sumerge completamente en el juego, permitiéndote concentrarte en cada detalle sonoro. ¡Potencia tu experiencia de juego con los HyperX Cloud II Wireless!",
    "509.000",
    "15% Off",
    "Incluye impuesto País",
    "./assets/audifono1.jpg",
    ["gris", "azul", "negro"],
    ["./assets/audifono1.jpg", "./assets/audifono2.jpg"],
    "1"
  ),
  new Product(
    "203421",
    "TECLADO GAMER G213",
    "Domina el campo de batalla con el Teclado Gamer G213 RGB LIGHTSYNC. Con teclas multimedia integradas para un control rápido y fácil de tu música y videos, este teclado te ofrece una experiencia de juego inmersiva y personalizable. Disfruta de la iluminación RGB LIGHTSYNC que se sincroniza con el contenido de tu juego para una atmósfera envolvente. Las teclas de membrana con respuesta táctil brindan una experiencia de escritura cómoda y silenciosa, mientras que la resistencia al derrame de líquidos te proporciona tranquilidad durante esas intensas sesiones de juego. ¡Prepárate para elevar tu nivel de juego con el Teclado Gamer G213 RGB LIGHTSYNC!",
    "229.000",
    "24% Off",
    "Incluye impuesto País",
    "./assets/teclado1.jpg",
    ["gris", "azul", "negro"],
    ["./assets/teclado1.jpg", "./assets/teclado2.jpg"],
    "0"
  ),
  new Product(
    "203420",
    "Mouse Gamer Logitech",
    "Domina cada movimiento en el campo de batalla con el Mouse Gamer Logitech G203 RGB Black. Diseñado para ofrecer precisión y velocidad, este mouse cuenta con un sensor óptico avanzado que garantiza un seguimiento preciso en cada movimiento. Además, su iluminación RGB personalizable te permite crear un ambiente de juego único que se adapta a tu estilo. Con un diseño ergonómico y cómodo, el Logitech G203 te brinda el control necesario para alcanzar la victoria en cada partida. Prepárate para experimentar un rendimiento excepcional y una estética impresionante con el Mouse Gamer Logitech G203 RGB Black.",
    "119.000",
    "30% Off",
    "Incluye impuesto País",
    "./assets/mouse1.jpg",
    ["gris", "azul", "negro"],
    ["./assets/mouse1.jpg", "./assets/mouse2.jpg"],
    "1"
  ),
  new Product(
    "203422",
    "Mousepad Gamer Lenovo",
    "Potencia tu juego con el Mousepad Gamer Lenovo Alfombrilla Ratón Gaming Legion XL - GXH0W29068. Diseñado para ofrecer un deslizamiento suave y preciso, esta alfombrilla de ratón proporciona una base estable para tu ratón gaming, permitiéndote realizar movimientos rápidos y precisos durante tus sesiones de juego más intensas. Con un tamaño XL, ofrece un amplio espacio para maniobrar, mientras que su diseño Legion agrega un toque de estilo a tu configuración gaming. ¡Prepárate para alcanzar nuevos niveles de precisión y comodidad con el Mousepad Gamer Lenovo Alfombrilla Ratón Gaming Legion XL!",
    "79.000",
    "60% Off",
    "Incluye impuesto País",
    "./assets/mousepad1.jpg",
    ["gris", "azul", "negro"],
    ["./assets/mousepad1.jpg", "./assets/mousepad2.jpg"],
    "0"
  ),
  new Product(
    "203424",
    "Monitor Advance ADV",
    "Sumérgete en una experiencia visual envolvente con el Monitor Advance ADV-2150S de 21.5 pulgadas. Equipado con una pantalla IPS FHD que ofrece colores vibrantes y ángulos de visión amplios, este monitor te sumerge en imágenes nítidas y detalladas. Con una frecuencia de actualización de 75Hz, disfrutarás de transiciones suaves y sin desenfoques, ideal para juegos y contenido multimedia. Además, cuenta con conectividad HDMI y VGA para una fácil conexión a tus dispositivos, y altavoces integrados para una experiencia de audio completa. Eleva tu experiencia de visualización con el Monitor Advance ADV-2150S.",
    "367.000",
    "33% Off",
    "Incluye impuesto País",
    "./assets/monitor1.jpg",
    ["gris", "azul", "negro"],
    ["/assets/monitor1.jpg", "/assets/monitor2.jpg"],
    "0"
  ),
  new Product(
    "203429",
    "Speaker Kurbis",
    "Descubre la excelencia del sonido con el Monitor de Estudio Parlantes Kurbis Bafles Potenciados con Bluetooth. Diseñados para ofrecer una reproducción de audio fiel y precisa, estos monitores de estudio son ideales tanto para profesionales de la música como para entusiastas del audio. Con altavoces potenciados integrados, disfrutarás de un sonido potente y claro que captura cada matiz de tu música. Además, la conectividad Bluetooth te permite reproducir fácilmente música desde tus dispositivos móviles sin necesidad de cables. Ya sea que estés mezclando, editando o simplemente disfrutando de tu música favorita, los monitores de estudio Kurbis ofrecen un rendimiento excepcional en cualquier situación.",
    "699.000",
    "61% Off",
    "Incluye impuesto País",
    "./assets/parlantes1.jpg",
    ["gris", "azul", "negro"],
    ["./assets/parlantes1.jpg", "./assets/parlantes2.jpg"],
    "0"
  ),
];

// let products  = [
//     {title: "Macbook Pro 15'4", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Tablet", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Audifonos", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Teclado", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Mouse", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
//     {title: "Microfono", description: "Space Gray", price: "$750.000", discount : "50% Off",policy: "Incluye impuesto País", img: "./assets/mock1.jpg" },
// ];
