

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



$("#tituloingrediente").dblclick(function(){

    $("#tituloingrediente").addClass('rojo')    ;
  })


  $("#titulopreparacion").dblclick(function(){

    $("#titulopreparacion").addClass('rojo')    ;
  });



  $("#tarjeta1").click(function(){

    $("#contenido1").toggle('slow')    ;
  
  })


  $("#tarjeta2").click(function(){

    $("#contenido2").toggle('slow')    ;
  
  })


  $("#tarjeta3").click(function(){

    $("#contenido3").toggle('slow')    ;
  
  })

