// DATA productos
const productos = [


  {
      id: "Pintura Agua ",
      titulo: "Pintura Base Agua Blanca",
      imagen: "https://easycolombia.vtexassets.com/arquivos/ids/155789-1600-1600?v=638066260486000000&width=1600&height=1600&aspect=true",

      categoria: {
          nombre: "Construccion",
          id: "¨pinturas"
      },
      precio: 168.720
  },
  {
      id: "Cemento Tipo I ",
      titulo: "Cemento Tipo I Gris",
      imagen: "https://easycolombia.vtexassets.com/arquivos/ids/178160-1600-1600?v=638066277713130000&width=1600&height=1600&aspect=true",

      categoria: {
          nombre: "Construccion",
          id: "¨cemento"
      },
      precio: 31.500
  },
  {
      id: "Varilla 01 ",
      titulo: "Varilla Roscada 1/2",
      imagen: "https://easycolombia.vtexassets.com/arquivos/ids/160810-1600-1600?v=638066265204670000&width=1600&height=1600&aspect=true",

      categoria: {
          nombre: "Construccion",
          id: "¨varilla"
      },
      precio: 13.690
  },
  
{
  id: "Varilla 02 ",
  titulo: "Conector varilla sólida",
  imagen: "https://easycolombia.vtexassets.com/arquivos/ids/183605-1600-1600?v=638066286071130000&width=1600&height=1600&aspect=true",

  categoria: {
      nombre: "Construccion",
      id: "¨varilla"
  },
  precio: 9.490
  },
  {
      id: "Ladrillo 01 ",
      titulo: "Ladrillo prensado liviano",
      imagen: "https://easycolombia.vtexassets.com/arquivos/ids/176815-800-800?v=638066276684870000&width=800&height=800&aspect=true",

      categoria: {
          nombre: "Construccion",
          id: "ladrillo"
      },
      precio: 1.990
  },
  
  {
      id: "Drywall ",
      titulo: "Lámina drywall",
      imagen: "https://homecenterco.scene7.com/is/image/SodimacCO/21442?fmt=webp&fit=fit,1&wid=420&hei=420",

      categoria: {
          nombre: "Construccion",
          id: "drywall"
      },
      precio: 55.900
  
  },
  {
      id: "tubo 01",
      titulo: "Tubo termoencogible",
      imagen: "https://easycolombia.vtexassets.com/arquivos/ids/157854-1600-1600?v=638066263174600000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Construccion",
          id: "tubo"
      },
      precio: 917
  },
  

  //Eléctricas

  {
      id: "Taladro-01",
      titulo: "Taladro Inalambrico Percutor 1/2" + "Bateria 2, 5Ah + Cargador - 48 Nm",
      imagen: "https://easycolombia.vtexassets.com/arquivos/ids/197737-1600-1600?v=638150345517700000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Maquinarias",
          id: "Taladro"
      },
      precio:  343.992
  },
  
{
  id: "Sierra-02",
  titulo: "Sierra Circular 1400w",
  imagen:"https://easycolombia.vtexassets.com/arquivos/ids/187597-1600-1600?v=638066294253330000&width=1600&height=1600&aspect=true",
  categoria: {
      nombre: "Maquinarias",
      id: "Sierra"
  },
  precio:  159.992
  },
  {
      id: "Polichadora-03",
      titulo: "Polichadora Potencia 1100 W Disco de 7 pulgadas Velocidad de 0 A 3500 Rpm",
      imagen:"https://easycolombia.vtexassets.com/arquivos/ids/184221-1600-1600?v=638066287084930000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Maquinarias",
          id: "Polichadora"
      },
      precio:  334.392
  },
  {
      id: "Sierra-04",
      titulo: "Sierra Caladora 120 V 550 W KS701E",
  imagen:"https://easycolombia.vtexassets.com/arquivos/ids/171265-1600-1600?v=638066272716670000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Maquinarias",
          id: "Sierra"
      },
      precio:  238.320
  },
  {
      id: "Taladro-05",
      titulo: "Taladro Percutor 936W 2700rpm DeWalt",
  imagen:"https://easycolombia.vtexassets.com/arquivos/ids/181076-1600-1600?v=638066280144730000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Maquinarias",
          id: "Taladro"
      },
      precio:  648.720
  },
  {
      id: "Herramientas-05",
      titulo: "Set De Herramientas 123 Piezas Mecan Multimando Stanley",
  imagen:"https://easycolombia.vtexassets.com/arquivos/ids/157182-1600-1600?v=638066262447630000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Maquinarias",
          id: "Herramientas"
      },
      precio:  425.672
  },


  //hogar
  {
      id: "Sanitario-01",
      titulo: "Sanitario 1 Pieza Palta Dual Blanco",
      imagen: "https://easycolombia.vtexassets.com/arquivos/ids/166241-1600-1600?v=638066269060530000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Hogar",
          id: "Sanitario"
      },
      precio:    299.99
      
  },
  {
      id: "Lavamanos-02",
      titulo: "Lavamanos Vidrio Blanco Trans 42 x 42 Cm",
  imagen:"https://easycolombia.vtexassets.com/arquivos/ids/184737-1600-1600?v=638066287713000000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Hogar",
          id: "Lavamanos"
      },
      precio:  89.940
  },
  {
      id: "Lavaplatos-08",
      titulo: "Lavaplatos 62 cm x 48 cm Sencillo Empotrar Acero Inoxidable",
      imagen:"https://easycolombia.vtexassets.com/arquivos/ids/174176-1600-1600?v=638066274796300000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Hogar",
          id: "Lavaplatos"
      },
      precio:  95.925
  },

  
{
  id: "Mesón-09",
  titulo: "Mesón 150X52CM Con Lavaplatos A La Izquierda 3 Huecos Para grifería 1",
  imagen:"https://easycolombia.vtexassets.com/arquivos/ids/193812-1600-1600?v=638066306841400000&width=1600&height=1600&aspect=true",
  categoria: {
      nombre: "Hogar",
      id: "Mesón "
  },
  precio:  581.630
  },
  {
      id: "Mueble Cocina-10",
      titulo: "Mueble Cocina Inferior Aliso 120Cm Native No Incluye Mesón",
      imagen: "https://easycolombia.vtexassets.com/arquivos/ids/184345-1600-1600?v=638066287255570000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Hogar",
          id: "Mueble Cocina"
      },
      precio:  374.925
  },
  {
      id: "Mueble Cocina-11",
      titulo: "Mueble Superior Aliso 1500 Challenger Color Dark",
      imagen:"https://easycolombia.vtexassets.com/arquivos/ids/160458-1600-1600?v=638066264966830000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Hogar",
          id: "Mueble Cocina"
      },
      precio:  374.925
  },
  {
      id: "Escalera-06",
      titulo: "Escalera Aluminio Tijera 4 Escalones",
  imagen: "https://easycolombia.vtexassets.com/arquivos/ids/187649-1600-1600?v=638066294353830000&width=1600&height=1600&aspect=true",
      categoria: {
          nombre: "Maquinarias",
          id: "Escalera"
      },
      precio:  199.990
  },



];
/* -------------------------------------------------------------------------- */
/** Con este código llenaremos los productos del array al id #contenedor-productos */
const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategoriasN = document.querySelectorAll('.boton-categoria');

const botonesCategorias = Array.from(botonesCategoriasN);
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito');

/* --------------------  Renderizar todos los productos ------------------- */
function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = '';
  productosElegidos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt=""${producto.titulo}"">
            <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
    contenedorProductos.append(div);
  });
  actualizarBotonesAgregar();
}
cargarProductos(productos);

/*Llamamos a todos los botones categorias */
botonesCategorias.forEach((boton) => {
  boton.addEventListener('click', (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove('active'));

    e.currentTarget.classList.add('active');

    if (e.currentTarget.id != 'todos') {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;

      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = 'Todos los productos';
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll('.producto-agregar');
  botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', agregarAlCarrito);
  });
}

let productosEnCarrito ;
let productosEnCarritoLS = localStorage.getItem('productos-en-carrito');
if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}
function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();
  actualizArnumeroMobile();

  localStorage.setItem(
    'productos-en-carrito',
    JSON.stringify(productosEnCarrito)
  );
}

/*ACTUALIZAR NUMERITO */
function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;

}

//TODO me falta hacer el metodo actuializa carrito numero mobile

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}
/* ------------------------------ carritomobile ----------------------------- */

const actualizArnumeroMobile = () => {
  let numeroCarrito = document.querySelector('#carrito_mobile--numero');
numeroCarrito.innerText = productosEnCarrito.length;

  
}
actualizArnumeroMobile()



/* -------------------------- Filtrar por categoria ------------------------- */


const filtraCategoria = (categoria) => {
  let dataCategoria = []
  productos.forEach(function (producto) {
    if (categoria === producto.categoria.nombre) {
      dataCategoria.push(producto)
    }
  });
  
  cargarProductos(dataCategoria)
  console.log(dataCategoria);
  
  
}


/* ---------------------------------- barra --------------------------------- */
const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');

// Evento de entrada en el campo de búsqueda
searchInput.addEventListener('input', function() {
  const inputValue = this.value.toLowerCase();
  const filteredProducts = productos.filter(producto => producto.titulo.toLowerCase().includes(inputValue));
  cargarProductos(filteredProducts)

  // Limpiar la lista de sugerencias
  suggestionsList.innerHTML = '';

  // Mostrar las sugerencias de autocompletado
  filteredProducts.forEach(producto => {
    const listItem = document.createElement('li');
    listItem.textContent = producto.titulo;
    suggestionsList.appendChild(listItem);
  });

  // Mostrar/ocultar la lista de sugerencias según corresponda
  if (inputValue === '') {
    suggestionsList.style.display = 'none';
  } else {
    suggestionsList.style.display = 'block';
  }
});



// Evento de clic en una sugerencia
suggestionsList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    const selectedProductTitle = event.target.textContent;
    searchInput.value = selectedProductTitle;
    suggestionsList.style.display = 'none';
  }
});


