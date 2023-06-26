let productosEnCarrito = localStorage.getItem('productos-en-carrito');
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
const contenedorCarritoComprado = document.querySelector('#carrito-comprado');
let botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');

function cargarProductosCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    contenedorCarritoVacio.classList.add('disabled');
    contenedorCarritoProductos.classList.remove('disabled');
    contenedorCarritoAcciones.classList.remove('disabled');
    contenedorCarritoComprado.classList.add('disabled');

    contenedorCarritoProductos.innerHTML = '';

    productosEnCarrito.forEach((producto) => {
      const div = document.createElement('div');
      div.classList.add('carrito-producto');
      div.innerHTML = `
    
            <img class="carrito-producto-imagen" src="${
              producto.imagen
            }" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Título</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${ Math.trunc(producto.precio * producto.cantidad,2)}</p>
            </div>
            <button class="carrito-producto-eliminar"  id="${
              producto.id
            }" > <i class="bi bi-trash-fill"></i> </button>
            `;

      contenedorCarritoProductos.append(div);
    });
  } else {
    contenedorCarritoVacio.classList.remove('disabled');
    contenedorCarritoProductos.classList.add('disabled');
    contenedorCarritoAcciones.classList.add('disabled');
    contenedorCarritoComprado.classList.add('disabled');
  }
  actualizarBotonesEliminar();
}
cargarProductosCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');

  botonesEliminar.forEach((boton) => {
    boton.addEventListener('click', eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex((producto) => producto.id === idBoton);
  productosEnCarrito.splice(index, 1);
  cargarProductosCarrito();
  localStorage.setItem('productos-en-carrito',JSON.stringify(productosEnCarrito));
}


/* ------------------------------- suma total ------------------------------- */
const sumaTotal = () => {
  let totaltag = document.querySelector('#total');
  let total_price = null;
  productosEnCarrito.forEach((priceElemente) => {
    total_price += priceElemente.precio * priceElemente.cantidad;
  });
  totaltag.textContent = `$${Math.trunc(total_price, 2)}`;


  
}
sumaTotal();


  


/* ------------------------------ vaciarCarrito ----------------------------- */

let btn_vaciarCarrito = document.querySelector('#btn-vaciarCarrito');

btn_vaciarCarrito.addEventListener('click', vaciarCarrito)

function vaciarCarrito() {
  while (productosEnCarrito.length) {
    productosEnCarrito.splice(0, productosEnCarrito.length);
    cargarProductosCarrito();
    localStorage.setItem('productos-en-carrito',JSON.stringify(productosEnCarrito)
    );
  }
  sumaTotal();
  


}
let btn_modal = document.querySelector('#btn-modal');
btn_modal.addEventListener('click', vaciarCarrito)
btn_modal.addEventListener('click', confeti)


function confeti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  
}

  


