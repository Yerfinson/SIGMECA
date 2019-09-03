  $(window).scroll(function() {
        if ($("#menu").offset().top > 180) {
            $("#menu").addClass("bg-primari");
            $("#menu").addClass("navbar-dark");
        } else {
            $("#menu").removeClass("bg-primari");
            $("#menu").removeClass("navbar-dark");
        }
      });