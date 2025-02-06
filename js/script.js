var positionY;
var scrollTop;

var lastPositionX = 0;

$(document).ready(function () {
  //récupérer les dimension de la fenêtre :
  var hauteurFenetre = $(window).width();
  var largeurFenetre = $(window).height();
  scrollTop = $(window).scrollTop(); //récupérer la "quantité" de scroll
  let isDragging = false;

  ////vous pouvez rédiger vos modification ici !

  /////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
  $(window).on("scroll", function () {
    scrollTop = $(window).scrollTop(); //création d'une varible contenant la "quantitée de scroll"
  });

  $(window).on("mousemove", function () {
    positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
  });

  $("#forme1").on("mouseenter", function () {
    $(this).toggleClass("mouvement");
  });
  $("#forme1").on("mouseleave", function () {
    $(this).toggleClass(null);
  });
  $("#forme2").on("mouseenter", function () {
    $(this).toggleClass("mouvement2");
  });
  $("#forme2").on("mouseleave", function () {
    $(this).toggleClass(null);
  });

  $(window).on("scroll", function () {
    $("#forme1").css({
      scale: "" + ((scrollTop * 0.005) % 3) + "",
    });
    $("#forme2").css({
      scale: "" + ((scrollTop * 0.005) % 3) + "",
    });
  });
  //ici on utilise une classe déplacment qui sera appliquée à tous les éléménts HTML qui peuvent être déplacer
  
  

    $("#forme1").on("mousedown", function (event) {
        isDragging = true;

        // Centrer l'élément sous la souris
        let offsetX = event.pageX - $(this).offset().left;
        let offsetY = event.pageY - $(this).offset().top;

        $(document).on("mousemove", function (event) {
            if (isDragging) {
                $("#forme1").css({
                    left: event.pageX - offsetX + "px",
                    top: event.pageY - offsetY + "px",
                    position: "absolute",
                });
            }
        });
    });
    $("#forme2").on("mousedown", function (event) {
      isDragging = true;

      // Centrer l'élément sous la souris
      let offsetX = event.pageX - $(this).offset().left;
      let offsetY = event.pageY - $(this).offset().top;

      $(document).on("mousemove", function (event) {
          if (isDragging) {
              $("#forme2").css({
                  left: event.pageX - offsetX + "px",
                  top: event.pageY - offsetY + "px",
                  position: "absolute",
              });
          }
      });
  });


    $(document).on("mouseup", function () {
        isDragging = false;
        $(document).off("mousemove");
    });

  //////// ///ne rien écrire après ceci
});
