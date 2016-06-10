
//++++++++++++++++++++ Bootstrap Tooltips ++++++++++++++++++++//

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();

})

//++++++++++++++++++++ Responsive owlCarousel ++++++++++++++++++++//

var owl = $('#owl-demo');
owl.owlCarousel({
    loop:true,
    margin:20,
    lazyLoad:true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        1000:{
            items:4
        }
    }
});