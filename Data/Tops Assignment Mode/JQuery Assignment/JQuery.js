//  (q2-a) ans class add aND REMOVE USE JQUERY

$("#addcss").click(function () {
    $(" ul li ").css("border", "2px solid red")

    $("li").css("display", "inline");
});

//  (q2-b) ans class add aND REMOVE USE JQUERY

$("#class-add").click(function () {
    $(" #Q2-b ").addClass("display_block")
});
$("#class-remove").click(function () {
    $(" #Q2-b ").removeClass("display_block")
});

//  (q2-c) ans class add aND REMOVE USE JQUERY

$(document).ready(function () {
    $("#animation").click(function () {
        $("p").animate({ left: '250px' });
    });
});


// ---------(q3) ans slider change -------------

$(document).ready(function () {

    var currentIndex = 0,
        navItems = $('.nav li');

    function setSlide(index) {
        navItems.removeClass('selected');
        navItems.eq(index).addClass('selected');
        $('.slide').css('display', 'none');
        $('.slide').eq(index).css('display', 'block');
    }

    $('.nav li').click(function () {
        var index = $('.nav li').index($(this));
        currentIndex = index;
        setSlide(currentIndex);
    });

    function next() {
        if (currentIndex < (navItems.length - 1)) {
            currentIndex++;
            setSlide(currentIndex);
        }
    }

    $('.next').click(function () {
        next();
    });

    function prev() {
        if (currentIndex > 0) {
            currentIndex--;
            setSlide(currentIndex);
        }
    }

    $('.prev').click(function () {
        prev();
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 39) {
            next();
        } else if (event.keyCode == 37) {
            prev();
        }
    }, true);

    function slide() {
        if (currentIndex < (navItems.length - 1)) {
            currentIndex++;
            setSlide(currentIndex);
        } else {
            currentIndex = 0;
            setSlide(currentIndex);
        }
    }

    var interval = setInterval(slide, 1000);

});