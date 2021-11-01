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
    constructor(titulo, precio, tipo, photo) {
        this.titulo = titulo;
        this.precio = parseFloat(precio);
        this.tipo = tipo;
        this.photo = photo;
    };
};



//fichas de producto a partir del json



    $("#productContainer").append(`<div class="container">
    <div class="items">
        <div class="row">

            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    
                    <img class="item-image" src="img/botaniste.jpg">
                    <h3 class="item-title">Botaniste</h3>
                    <h4 class="item-type">Perfume de jazmín</h4>
                    <div class="item-details">
                        
                        <h4 class="item-price">35.75€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    

                    <img class="item-image" src="img/perfume.jpg">
                    <h3 class="item-title">Lavender</h3>
                    <h4 class="item-type">Perfume de lavanda</h4>
                    <div class="item-details">
                        <h4 class="item-price">35.75€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    

                    <img class="item-image" src="img/jabon.jpg">
                    <h3 class="item-title">Savon</h3>
                    <h4 class="item-type">Jabón sólido</h4>
                    <div class="item-details">
                        <h4 class="item-price">9.95€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    

                    <img class="item-image" src="img/cafe.jpg">
                    <h3 class="item-title">Café</h3>
                    <h4 class="item-type">Jabón sólido</h4>
                    <div class="item-details">
                        <h4 class="item-price">9.95€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    

                    <img class="item-image" src="img/dientes.jpg">
                    <h3 class="item-title">Organic</h3>
                    <h4 class="item-type">Cepillo de dientes</h4>
                    <div class="item-details">
                        <h4 class="item-price">19.99€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    

                    <img class="item-image" src="img/spray.jpg">
                    <h3 class="item-title">Kalos</h3>
                    <h4 class="item-type">Spray corporal</h4>
                    <div class="item-details">
                        <h4 class="item-price">7.90€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    
                    <img class="item-image" src="img/jade.jpg">
                    <h3 class="item-title">Jade</h3>
                    <h4 class="item-type">Rodillo de jade</h4>
                    <div class="item-details">
                        
                        <h4 class="item-price">14.10€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    
                    <img class="item-image" src="img/cepillos.jpg">
                    <h3 class="item-title">Body Brush</h3>
                    <h4 class="item-type">Cepillo corporal</h4>
                    <div class="item-details">
                        
                        <h4 class="item-price">4.90€</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`);
