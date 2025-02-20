//Coloque una carpeta a parte con todas las imagenes y puse bien en la propiedad img de los objetos la direccion
const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "/images/taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "/images/taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "/images/bota-negra.jpg",
  },
  {
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "/images/bota-azul.jpg",
  },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "/images/zapato-rojo.jpg",
  },
];
// añadi nombres mas descriptivos a las variables y cambie el nombre del metodo por que el que tenia no existia
const $listaDeProductos = document.getElementById("lista-de-productos");
// coloque una clase especifica para seleccionar ese elemento html
const $inputFiltrar = document.querySelector(".input-filtrar");
// Aquí le coloque un id descriptivo a ese elemento html para ser especifico que sea ese boton de filtrado el que seleccione
const $botonDeFiltro = document.querySelector("#boton-filtrar");
//Agregue un nuevo boton para poder mostrar todos los productos
const $botonMostrarTodos = document.querySelector("#boton-mostrar-todos");

const filtrado = (productos = [], texto) => {
  return productos.filter(
    (item) =>
      //coloco el lowerCase por si el usuario escribe en mayusculas de todas formas encuentre el match con el texto
      item.tipo.includes(texto.toLowerCase()) ||
      item.color.includes(texto.toLowerCase())
  );
};
//cree una función para reciclar codigo de la creacion de las tarjetas de los productos
const createCardProduct = (productos) => {
  //cambie el nombre de las variables para ser mas descriptivo
  const $divElement = document.createElement("div");
  $divElement.classList.add("producto");

  const $title = document.createElement("p");
  $title.classList.add("titulo");
  $title.textContent = productos.nombre;

  const $imagen = document.createElement("img");
  $imagen.setAttribute("src", productos.img);

  $divElement.appendChild($title);
  $divElement.appendChild($imagen);
  return $divElement;
};
//Utilice el metodo for of de los arreglos para mayor legibilidad del codigo a la hora de iterar
for (const producto of productos) {
  $listaDeProductos.appendChild(createCardProduct(producto));
}

$botonDeFiltro.onclick = function () {
  // con esta propiedad limpiamos el contendo de ese div en lugar
  // de hace un bucle y limpiar nodo por nodo
  $listaDeProductos.textContent = "";

  //puse nombre descriptivo de que estoy obteniendo el valor del input

  const productosFiltrados = filtrado(productos, $inputFiltrar.value);

  for (const producto of productosFiltrados) {
    $listaDeProductos.appendChild(createCardProduct(producto));
  }
  //limpio el input para el usuario
  $inputFiltrar.value = "";
};

$botonMostrarTodos.onclick = function () {
  $listaDeProductos.textContent = "";
  for (let i = 0; i < productos.length; i++) {
    $listaDeProductos.appendChild(createCardProduct(productos[i]));
  }
  //limpio el input para el usuario
  $inputFiltrar.value = "";
};
