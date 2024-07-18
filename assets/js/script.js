import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

$(document).ready(function() {
  
    $("a.nav-link").on('click', function(event) {

        if (this.hash !== "") {
           
            event.preventDefault();

            
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });


    $(document).ready(function() {
        $(".my_boton").click(function() {
          alert("Mensaje enviado");
        });
      });


      $('[data-toggle="tooltip"]').tooltip();

    // Toggle the tooltip on click
    $('#icon-tooltip').click(function(){
        $(this).tooltip('toggle');
    });


});