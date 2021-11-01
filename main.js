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


//construcción clase de productos

class Producto {

    constructor( titulo, precio, tipo, photo) {
        this.titulo = titulo;
        this.precio = parseFloat(precio);
        this.tipo = tipo;
        this.photo = photo;
    }
}


//fichas de producto a partir del json
$("#productContainer").append(`<div class="container">
    <div class="items">
        <div class="row">

            <div class="col-md3 mr-1 ml-1">
                <div class="item shadow mb-2">
                    <img class="item-image" src="${productosJSON[0].photo}">
                    <h3 class="item-title">${productosJSON[0].titulo}</h3>
                    <h4 class="item-type">${productosJSON[0].tipo}</h4>
                    <div class="item-details">
                        <h4 class="item-price">${productosJSON[0].precio}€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>

            <div class="col-md3 mr-1 ml-1">
                <div class="item shadow mb-2">
                    <img class="item-image" src="${productosJSON[1].photo}">
                    <h3 class="item-title">${productosJSON[1].titulo}</h3>
                    <h4 class="item-type">${productosJSON[1].tipo}</h4>
                    <div class="item-details">
                        <h4 class="item-price">${productosJSON[1].precio}€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>

            <div class="col-md3 mr-1 ml-1">
                <div class="item shadow mb-2">
                    <img class="item-image" src="${productosJSON[2].photo}">
                    <h3 class="item-title">${productosJSON[2].titulo}</h3>
                    <h4 class="item-type">${productosJSON[2].tipo}</h4>
                    <div class="item-details">
                        <h4 class="item-price">${productosJSON[2].precio}€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>

            <div class="col-md3 mr-1 ml-1">
                <div class="item shadow mb-2">
                    <img class="item-image" src="${productosJSON[3].photo}">
                    <h3 class="item-title">${productosJSON[3].titulo}</h3>
                    <h4 class="item-type">${productosJSON[3].tipo}</h4>
                    <div class="item-details">
                        <h4 class="item-price">${productosJSON[3].precio}€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>

            <div class="col-md3 mr-1 ml-1">
                <div class="item shadow mb-2">
                    <img class="item-image" src="${productosJSON[4].photo}">
                    <h3 class="item-title">${productosJSON[4].titulo}</h3>
                    <h4 class="item-type">${productosJSON[4].tipo}</h4>
                    <div class="item-details">
                        <h4 class="item-price">${productosJSON[4].precio}€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>

            <div class="col-md3 mr-1 ml-1">
                <div class="item shadow mb-2">
                    <img class="item-image" src="${productosJSON[5].photo}">
                    <h3 class="item-title">${productosJSON[5].titulo}</h3>
                    <h4 class="item-type">${productosJSON[5].tipo}</h4>
                    <div class="item-details">
                        <h4 class="item-price">${productosJSON[5].precio}€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>

            <div class="col-md3 mr-1 ml-1">
                <div class="item shadow mb-2">
                    <img class="item-image" src="${productosJSON[6].photo}">
                    <h3 class="item-title">${productosJSON[6].titulo}</h3>
                    <h4 class="item-type">${productosJSON[6].tipo}</h4>
                    <div class="item-details">
                        <h4 class="item-price">${productosJSON[6].precio}€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>

            <div class="col-md3 mr-1 ml-1">
                <div class="item shadow mb-2">
                    <img class="item-image" src="${productosJSON[7].photo}">
                    <h3 class="item-title">${productosJSON[7].titulo}</h3>
                    <h4 class="item-type">${productosJSON[7].tipo}</h4>
                    <div class="item-details">
                        <h4 class="item-price">${productosJSON[7].precio}€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
</div>`);


// CARRITO DE COMPRA

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});


// aqui añadimos un evento click con jquery para cuando se pulsa el boton de comprar
const comprarButton = $(".comprarButton").click(function () { 
    alert(`Su compra se ha realizado con éxito`);
});


const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
      elementQuantity.value++;
      
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

  shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
    const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('€', ''));
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
    const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}


//local storage
localStorage.setItem("productos_almacenados", JSON.stringify(productosJSON)); 

console.log(JSON.parse(localStorage.getItem("productos_almacenados")));