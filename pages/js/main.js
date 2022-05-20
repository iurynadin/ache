(function ($) {
    $(".navbar-burger").on("click", function (event) {
        toggleMenu();
        console.log("menu");
        event.preventDefault();
    });
    function toggleMenu() {
        $(".navbar-burger").toggleClass("is-active");
        $(".secondaryNav").toggleClass("is-active");
        setTimeout(function () {
            console.log("exibir menu");
        }, 200);
    }

    $("#backTop, .heroNav ul li a").on(
        "click",
        function (event) {
            console.log('teste');
            event.preventDefault();
            var url = $(this).attr("href");
            console.log('url: ', url);

            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: $(url).offset().top,
                    },
                    800,
                    "easeInOutExpo"
                );
        }
    );

    var playing = false;
    $(".audio-btn").click(function(e) {
		var x = document.getElementById("audio");
		playing = !playing;
        $(".audio-pause").toggleClass("hidden");
        $(".audio-icon").toggleClass("hidden");
		if(playing){
			x.play();
		}else{
			x.pause();
		}
        e.preventDefault();
	});

})(jQuery);

function init() {
    window.addEventListener("scroll", function (e) {
        var distanceY =
                window.pageYOffset ||
                document.documentElement.scrollTop,
            shrinkOn = 500,
            hamb = document.querySelector("header__hambcont");

        if (distanceY > shrinkOn) {
            $(".header__hambcont").addClass("is-spying");
            $(".topNav").addClass("is-active");

        } else {
            $(".header__hambcont").removeClass("is-spying");
            $(".topNav").removeClass("is-active");
        }
    });
}
window.onload = init();