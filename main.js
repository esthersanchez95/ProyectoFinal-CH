//DESAFIO 4. CALCULO DE PRECIO TOTAL SUMANDO

let precioTotal = 0;
let precioProducto;

function sumaProductos(precioProducto) {
    while (precioProducto != '') {
        precioProducto =  Number(prompt('Escribe el precio del producto que quieres'));
        precioTotal = precioTotal + precioProducto;
        console.log(precioProducto);
      };
    
      alert('la suma total de los productos es de: ' + precioTotal + '€'); 
};

sumaProductos();


//DESAFIO COMPLEMENTARIO. CALCULO DEL IVA DEL 21%
let precioConIVA;

function sumaIVA(){
    precioConIVA = precioTotal + 1.21;
    
}

sumaIVA();

function mostrarPrecioIVA(){
    console.log('El precio con IVA asciende a: ' + precioConIVA + '€');
}

mostrarPrecioIVA();