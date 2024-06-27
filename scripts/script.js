$(document).ready(function () {
  // Cerrar el menú al hacer clic en un enlace
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
