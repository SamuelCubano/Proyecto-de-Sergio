// Creamos un arreglo vacío que actuará como el carrito de compras
const carrito = [];


// Función que se ejecuta al hacer clic en un botón "Comprar"
function agregarAlCarrito(producto, precio) {
  // Agrega un objeto al arreglo 'carrito' con el nombre del producto y su precio
  carrito.push({ producto, precio });

  // Llama a la función para actualizar visualmente el carrito
  actualizarCarrito();
}
// Función que muestra los productos agregados al carrito y calcula el total
function actualizarCarrito() {
  // Selecciona el elemento <ul> donde se listarán los productos
  const lista = document.getElementById("listaCarrito");

  // Selecciona el elemento <p> donde se mostrará el total
  const totalElem = document.getElementById("total");

  // Limpia el contenido anterior de la lista para evitar duplicados
  lista.innerHTML = "";

  // Inicializa el acumulador total en 0
  let total = 0;
  // Recorre cada elemento del carrito
  carrito.forEach(item => {
    // Crea un nuevo elemento <li> para mostrar el producto
    const li = document.createElement("li");

    // Le asigna el nombre del producto y su precio como texto
    li.textContent = `${item.producto} - $${item.precio}`;

    // Agrega el elemento <li> a la lista <ul>
    lista.appendChild(li);

    // Suma el precio del producto al total (acumulador)
    total += item.precio;
  });

   // Verifica si el total supera los $100
   if (total > 100) {
    // Calcula el descuento del 10% (porcentaje)
    const descuento = total * 0.10;

    // Resta el descuento al total
    total -= descuento;

    // Muestra el total con descuento, formateado a 2 decimales
    totalElem.innerHTML = `Total con 10% de descuento: $${total.toFixed(2)}`;
  } else {
    // Si no hay descuento, muestra el total normal
    totalElem.innerHTML = `Total: $${total.toFixed(2)}`;
  }
}
