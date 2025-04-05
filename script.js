const carrito = [];

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const totalElem = document.getElementById("total");
  lista.innerHTML = "";

  let total = 0;
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.producto} - $${item.precio}`;
    lista.appendChild(li);
    total += item.precio;
  });

  // Descuento del 10% si el total supera $100
  if (total > 100) {
    const descuento = total * 0.10;
    total -= descuento;
    totalElem.innerHTML = `Total con 10% de descuento: $${total.toFixed(2)}`;
  } else {
    totalElem.innerHTML = `Total: $${total.toFixed(2)}`;
  }
}