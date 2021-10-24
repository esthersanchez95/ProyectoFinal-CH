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

    constructor( titulo, precio, tipo, photo) {
    
        this.titulo = titulo;
        this.precio = parseFloat(precio);
        this.tipo = tipo;
        this.photo = photo;

    }

    getPrecioConIva() {
        return this.precio * 1.21;
    }

    getPrecio() {
        return this.precio;
    }
}


//fichas de producto a partir del json
const productContainer = document.getElementById('productContainer')


for (let producto of productosJSON) {
    let article = document.createElement('article');
    article.className= 'item';
    article.innerHTML = `<img id="foto" src="${producto.photo}">
    <div id="caracteristicas">
        <h6 id="titulo">${producto.titulo}</h6>
        <p id="tipo">${producto.tipo}</p>
        <p id="precio">${producto.precio}</p>
    </div>
    <button class="boton_añadir"><a href="#">AÑADIR AL CARRITO</a></button>`;

    productContainer.appendChild(article);
}


//eventos

const carrito = document.getElementById('carrito');
const shoppingCartRow = document.getElementById('lista-carrito');
const botonAnadir = document.getElementsByClassName('boton_añadir');
const vaciarCarritoBtn = document.getElementsByClassName('vaciar-carrito');

cargarEventListeners();

//Funcion de todos los eventos
function cargarEventListeners(){

    for (var i = 0 ; i < productosJSON.length; i++) {
        botonAnadir[i].addEventListener('click', comprarProducto);
    };
}
    

//Evento botón añadir al carrito
function comprarProducto(event){
    const but = event.target;
    const item = but.closest('.item');
    
    const itemTitle = item.querySelector('#titulo').textContent;
    const itemTipo = item.querySelector('#tipo').textContent;
    const itemPrice = item.querySelector('#precio').textContent;

    addItemToShoppingCart(itemTitle, itemTipo, itemPrice);
}

function addItemToShoppingCart (itemTitle, itemTipo, itemPrice){
    const shoppingCartContent = `
                               <tbody class= "shoppingCartItem">
                                    <tr>  
                                        <td>${itemTitle}</td>
                                        <td>${itemTipo}</td>
                                        <td class="shoppingCartItemPrice">${itemPrice}€</td>
                                        <input class="shoppingCartItemQuantity" type="number" value="1">
                                    </tr>
                                </tbody>
                                `
    shoppingCartRow.innerHTML += shoppingCartContent;
    carrito.append(shoppingCartRow);

    updateShoppingCartTotal();
}

//actualizar total carrito
function updateShoppingCartTotal(){
    let total=0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    
    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('€', ''));

        var shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity')||"";
        if (shoppingCartItemQuantityElement=="")
            {
                document.getElementsByClassName("shoppingCartItemQuantity").innerHTML="";
                return;
            }; 
        
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        console.log(shoppingCartItemQuantityElement);
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
      });

}



}); //final del load