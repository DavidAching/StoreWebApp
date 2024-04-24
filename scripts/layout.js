/* #region  NAVEGACION */
const navSelector = document.getElementById("nav");

const options_nav = [
  { title: "Ofertas", linkTo: "./outlet.html" },
  { title: "Cómo comprar", linkTo: "./how.html" },
  { title: "Costos y tarifas", linkTo: "./taxs.html" },
  { title: "Mis pedidos", linkTo: "./orders.html" },
  { title: "Garantía", linkTo: "./warranty.html" },
];

for (const options of options_nav) {
  const anchor = document.createElement("a");
  anchor.className = "nav-button";
  anchor.textContent = options.title;
  anchor.href = options.linkTo;
  navSelector.appendChild(anchor);
  anchor.style.color = "white";
  anchor.style.textDecoration = "none";
  anchor.style.fontWeight = "bold";
}

/* #endregion */

/* #region  FOOTER */
const footerSelector = document.querySelector("#footer");
const footer_options = [
  [
    { option: "Ofertas de la semana", active: true, linkTo: "#" },
    { option: "Laptops", active: false, linkTo: "#" },
    { option: "Audio", active: true, linkTo: "#" },
    { option: "Auticulares", active: true, linkTo: "#" },
  ],
  [
    { option: "Cómo comprar", active: true, linkTo: "#" },
    { option: "Formas de pago", active: false, linkTo: "#" },
    { option: "Envios", active: false, linkTo: "#" },
    { option: "Devoluciones", active: false, linkTo: "#" },
  ],
  [
    { option: "Costos y tarifas", active: true, linkTo: "#" },
    { option: "Impuestos", active: false, linkTo: "#" },
    { option: "Facturación", active: false, linkTo: "#" },
  ],
  [
    { option: "Mis pedidos", active: true, linkTo: "#" },
    { option: "Pedir nuevamente", active: false, linkTo: "#" },
    { option: "Lista de deseos", active: false, linkTo: "#" },
  ],
  [{ option: "Garantía de Entrega", active: true, linkTo: "#" }],
];

for (const options of footer_options) {
  const div = document.createElement("div");
  div.className = "col";
  const ul = document.createElement("ul");
  div.appendChild(ul);
  for (const lista of options) {
    const li = document.createElement("li");
    ul.appendChild(li);
    const a = document.createElement("a");
    a.href = "#"
    li.appendChild(a);
    a.textContent = lista.option;
    if (lista.active == true) {
      li.className = "col-main-item";
    }
  }
  footerSelector.appendChild(div);
}
/* #endregion */
