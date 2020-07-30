
$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
        //$(".line").css("stroke", "#000 !important");

        if(this.classList.contains('btn-open')) {
            $("html").css("overflow", "hidden");
            console.log("opened button");
        }
        else {
            $("html").css("overflow", "auto");
            console.log("closed button");
        }   

        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
