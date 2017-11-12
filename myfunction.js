//tombol menampilkan sidebar
$(".msb").click(function() {
    $("#sidebar").addClass("show-sidebar");
    $(".msb").removeClass("show");
    $("#sidebar").removeClass("hide-sidebar-lm");
    $(".main").removeClass("add-main-width");
    $(".op-hide").addClass("op-show");
});

//tombol menyembunyikan sidebar
$(".hsb").click(function() {
    $("#sidebar").removeClass("show-sidebar");
    $("#sidebar").addClass("hide-sidebar-lm");
    $(".main").addClass("add-main-width");
    $(".msb").addClass("show");
    $(".op-hide").removeClass("op-show");
});
//opacity saat memunculkan sidebar
$(".op-hide").click(function() {
    $("#sidebar").removeClass("show-sidebar");
    $("#sidebar").addClass("hide-sidebar-lm");
    $(".main").addClass("add-main-width");
    $(".msb").addClass("show");
    $(".op-hide").removeClass("op-show");
});
//fungsi collapse saat mengklik salah satu menu
$(window).resize(function() {
    if ($(window).width() < 992) {
        $('li a').click(function() {
            $('#sidebar').css('left', '0');
            $('#sidebar').removeClass('show-sidebar');
            $("#sidebar").addClass("hide-sidebar-lm");
            $(".op-hide").removeClass("op-show");
        });
    } else {
        $('li a').click(function() {
            $('#sidebar').css('left', '0');
            $('#sidebar').addClass('show-sidebar');
            $("#sidebar").removeClass("hide-sidebar-lm");
            $(".op-hide").removeClass("op-show");
        });
    }
});
// bagian-bagian pergatian halaman active
$("#dashboard").click(function() {
    $("#dashboard").addClass("active");
    $("#article").removeClass("active");
    $("#gallery").removeClass("active");
    $("#user").removeClass("active");
    $("#theme").removeClass("active");
    $("#tag").removeClass("active");

    $("#m-dashboard").removeClass("hide");
    $("#m-article").addClass("hide");
    $("#m-gallery").addClass("hide");
    $("#m-user").addClass("hide");
    $("#m-theme").addClass("hide");
    $("#m-tag").addClass("hide");
});
$("#article, #article-box").click(function() {
    $("#dashboard").removeClass("active");
    $("#article").addClass("active");
    $("#gallery").removeClass("active");
    $("#user").removeClass("active");
    $("#theme").removeClass("active");
    $("#tag").removeClass("active");

    $("#m-dashboard").addClass("hide");
    $("#m-article").removeClass("hide");
    $("#m-gallery").addClass("hide");
    $("#m-user").addClass("hide");
    $("#m-theme").addClass("hide");
    $("#m-tag").addClass("hide");
});
$("#gallery").click(function() {
    $("#dashboard").removeClass("active");
    $("#article").removeClass("active");
    $("#gallery").addClass("active");
    $("#user").removeClass("active");
    $("#theme").removeClass("active");
    $("#tag").removeClass("active");

    $("#m-dashboard").addClass("hide");
    $("#m-article").addClass("hide");
    $("#m-gallery").removeClass("hide");
    $("#m-user").addClass("hide");
    $("#m-theme").addClass("hide");
    $("#m-tag").addClass("hide");
});
$("#tag").click(function() {
    $("#dashboard").removeClass("active");
    $("#article").removeClass("active");
    $("#gallery").removeClass("active");
    $("#user").removeClass("active");
    $("#theme").removeClass("active");
    $("#tag").addClass("active");

    $("#m-dashboard").addClass("hide");
    $("#m-article").addClass("hide");
    $("#m-gallery").addClass("hide");
    $("#m-user").addClass("hide");
    $("#m-theme").addClass("hide");
    $("#m-tag").removeClass("hide");
});
$("#user").click(function() {
    $("#dashboard").removeClass("active");
    $("#article").removeClass("active");
    $("#gallery").removeClass("active");
    $("#user").addClass("active");
    $("#theme").removeClass("active");
    $("#tag").removeClass("active");

    $("#m-dashboard").addClass("hide");
    $("#m-article").addClass("hide");
    $("#m-gallery").addClass("hide");
    $("#m-user").removeClass("hide");
    $("#m-theme").addClass("hide");
    $("#m-tag").addClass("hide");
});
$("#theme").click(function() {
    $("#dashboard").removeClass("active");
    $("#article").removeClass("active");
    $("#gallery").removeClass("active");
    $("#user").removeClass("active");
    $("#theme").addClass("active");
    $("#tag").removeClass("active");

    $("#m-dashboard").addClass("hide");
    $("#m-article").addClass("hide");
    $("#m-gallery").addClass("hide");
    $("#m-user").addClass("hide");
    $("#m-theme").removeClass("hide");
    $("#m-tag").addClass("hide");
});
