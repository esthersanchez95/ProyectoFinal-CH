//Declaramos la url que vamos a usar para el GET
const URLGET = "http://hp-api.herokuapp.com/api/characters/students"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">HARRY POTTER CHARACTERS</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h3>${dato.name}</h3>
                                   <p>Casa: ${dato.house}</p>
                                  </div>`);
            }  
          }
    });
});


