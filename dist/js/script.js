$(document).ready(function(){
    // navbar shrink
    $(Window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("shrink");
        }
        else{
             $(".navbar").removeClass("shrink");
        }
    })
    //   video popup
    const vidSrc = $("#player1").attr("src");
    $(".vid-btn, .video-popup").on("click", function(){
        // alert("hi");
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player1").attr("src", "");
        }   
        else{
            $(".video-popup").addClass("open");
            if( $("#player1").attr("src","" )){
            $("#player1").attr("src",vidSrc );
        }
        }
    })

    // feature carousel initiator
    $(".feat-c").owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    // screenshot carousel initiator
    $(".screenshots-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            900:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    })
})