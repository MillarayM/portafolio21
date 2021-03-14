$(document).ready(function () {
  $("#arribaBoton").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#arribaBoton").slideDown(300);
    } else {
      $("#arribaBoton").slideUp(300);
    }
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$("#titulotrabajos1").click(function () {
  $("#titulotrabajos1").addClass("letra");
});

$("#titulotrabajos2").click(function () {
  $("#titulotrabajos2").addClass("letra");
});

$("#titulotrabajos3").click(function () {
  $("#titulotrabajos3").addClass("letra");
});

$("#titulotrabajos4").click(function () {
  $("#titulotrabajos4").addClass("letra");
});

$("#titulotrabajos5").click(function () {
  $("#titulotrabajos5").addClass("letra");
});

$("#titulotrabajos6").click(function () {
  $("#titulotrabajos6").addClass("letra");
});

$("#tarjeta1").click(function () {
  $("#contenido1").toggle("slow");
});

$("#tarjeta2").click(function () {
  $("#contenido2").toggle("slow");
});

$("#tarjeta3").click(function () {
  $("#contenido3").toggle("slow");
});
