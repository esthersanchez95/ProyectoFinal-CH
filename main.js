//DESAFIO 4. CALCULO DE PRECIO TOTAL SUMANDO

// let precioTotal = 0;
// let precioProducto;

// function sumaProductos(precioProducto) {
//     while (precioProducto != '') {
//         precioProducto =  Number(prompt('Escribe el precio del producto que quieres'));
//         precioTotal = precioTotal + precioProducto;
//         console.log(precioProducto);
//       };
    
//       alert('la suma total de los productos es de: ' + precioTotal + '€'); 
// };

// sumaProductos();


// //DESAFIO COMPLEMENTARIO. CALCULO DEL IVA DEL 21%
// let precioConIVA;

// function sumaIVA(){
//     precioConIVA = precioTotal + 1.21;
    
// }

// sumaIVA();

// function mostrarPrecioIVA(){
//     console.log('El precio con IVA asciende a: ' + precioConIVA + '€');
// }

// mostrarPrecioIVA();





/////////////////////////////// Clase 5
//construcción clase de productos

class Producto {

    constructor( titulo, precio, tipo) {
    
        this.titulo = titulo;
        this.precio = precio;
        this.tipo = tipo;

    }

    getPrecioConIva() {
        return this.precio * 1.21
    }

    getPrecio() {
        return this.precio
    }

}


const producto1 = new Producto('Botaniste', 35.75, 'Perfume de jazmín')
const producto2 = new Producto('Lavender', 35.75, 'Perfume de lavanda')


//añadir producto por prompt
function añadirProducto() {
    const titulo = prompt("indica el nombre del producto");
    const precio = prompt("indica el precio");
    const tipo = prompt("indica el tipo de producto");
  
    var producto3 = new Producto(titulo, precio, tipo);
    console.log(producto3);

    console.log(producto3.getPrecio());
    console.log(producto3.getPrecioConIva())
  }

añadirProducto();

/////////////////////////////// Clase 6
//Agregar array
const nombre_articulos = ['Botaniste', 'Lavender', 'Savon', 'Café', 'Organic', 'Kalos', 'Jade', 'Body Brush'];

for( let i = 0; i < nombre_articulos.length; i++) {
    
    console.log(nombre_articulos[i]);
}

//buscar articulos que contengan la letra e y los mete en un array
const e = nombre_articulos.filter(elemento => elemento.includes("e"));
console.log(e);   

//meter un nuevo elemento en el array
nuevos_articulos= nombre_articulos.push('Cepillo');

for( let x = 0; x < nuevos_articulos.length; x++) {
    
    console.log(nuevos_articulos[x]);
};

//////////////////////////////// desafio complementario crear array de objetos
let articulos = [
    {
      "nombre": "botaniste",
      "precio": 35.75,
      "tipo": 'perfume'
    },
    {
        "nombre": "lavender",
        "precio": "35.75",
        "tipo": 'perfume'
    },
    {
        "nombre": "savon",
        "precio": 9.95,
        "tipo": 'jabon'
      },
      {
          "nombre": "cafe",
          "precio": 9.95,
          "tipo": 'jabon'
      }
  ];

 console.log(articulos.sort((a,b) => (a.precio > b.precio) ? 1 : ((b.precio > a.precio) ? -1 : 0)));