let productosJSON = [
    {
      "photo": "img/botaniste.jpg",
      "titulo": "Botaniste",
      "precio": 35.75,
      "tipo": 'Perfume de jazmín'
    },
    {
       "photo": "img/perfume.jpg",
        "titulo": "Lavender",
        "precio": 35.75,
        "tipo": 'Perfume de lavanda'
    },
    {
       "photo": "img/jabon.jpg",
       "titulo": "Savon",
       "precio": 9.95,
       "tipo": 'Jabón sólido'
     },
     {
         "photo": "img/cafe.jpg",
         "titulo": "Café",
         "precio": 9.95,
         "tipo": 'Jabón sólido'
     },
     {
       "photo": "img/dientes.jpg",
       "titulo": "Organic",
       "precio": 5.50,
       "tipo": 'Cepillo de dientes'
     },
     {
         "photo": "img/spray.jpg",
         "titulo": "Kalos",
         "precio": 7.90,
         "tipo": 'Spray corporal'
     },
     {
       "photo": "img/jade.jpg",
       "titulo": "Jade",
       "precio": 14.10,
       "tipo": 'Rodillo de jade'
     },
     {
         "photo": "img/cepillos.jpg",
         "titulo": "Body brush",
         "precio": 4.90,
         "tipo": 'Cepillo corporal'
     },
    
  ];


window.addEventListener('load', () => {
    console.log('DOM Cargado');

//construcción clase de productos

class Producto {

    constructor( titulo, precio, tipo) {
    
        this.titulo = titulo;
        this.precio = parseFloat(precio);
        this.tipo = tipo;

    }

    getPrecioConIva() {
        return this.precio * 1.21;
    }

    getPrecio() {
        return this.precio;
    }
}


var productosArray= []
//añadir producto por prompt
function añadirProducto() {
    const titulo = prompt("indica el nombre del producto");
    const precio = prompt("indica el precio");
    const tipo = prompt("indica el tipo de producto");

    productosArray.push(new Producto(titulo, precio, tipo));
    console.log(productosArray);
  }

añadirProducto();

const productContainer = document.getElementById('productContainer')


for (let producto of productosArray) {
    let article = document.createElement('article');
    article.innerHTML = `<img src="img/botaniste.jpg">
    <div id="caracteristicas">
        <h6 id="titulo">${producto.titulo}</h6>
        <p>${producto.tipo}</p>
        <p id="precio">${producto.precio}</p>
    </div>
    <button class="boton_añadir"><a href="#">AÑADIR AL CARRITO</a></button>`;

    productContainer.appendChild(article);
}



}); //final del load