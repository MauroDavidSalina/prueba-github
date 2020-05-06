$(document).ready(function (){
  getContent();
});
//funcion para cargar el contenido dinamicamente de indexAjax.html
function getContent() {
  $.ajax({
    url: "http://www.json-generator.com/api/json/get/bPUkvYyLzC?indent=2",
    success: function (respuesta) {
        //console.log(Object.keys(respuesta.peliculas[0]));
        $(".section-central-ind").append(
          '<section id="s1"><h2>' + respuesta.peliculas[0].genero + '</h2>' +
          '<div class="articulos-individual">' 
        );
        var articulos = $(".articulos-individual");
        $.each(respuesta.peliculas, function(index,elemento) {
          articulos.append(
            '<article>' +
            '<img src="'+ elemento.poster +'" title="' + elemento.titulo + '">' +
            '<p>' + elemento.sinopsis + '</p></article></div>'
          );
        });
        //$(".section-central-ind img").css({'width':'200px','height':'200px'});
        console.log(respuesta);
      },
    error: function() {
        alert("No se ha podido obtener la información");
        console.log("No se ha podido obtener la información");
    }
  });
}