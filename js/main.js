
//slider
$('.slider').slick({
    // autoplay:true,
    // infinite: true,

});

//recommended
$('.recommended4you').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./media/icons/left-sider-icon.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./media/icons/right-sider-icon.svg'>",
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});

//testimonials
$('.testimonials').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./media/icons/left-sider-icon.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./media/icons/right-sider-icon.svg'>",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false

            }
        }
    ]
});

//Affliate brand Js
$('.featured-brands').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// remove tr

//*
$("#list-products-wish").on('click', '.btn-remove', function () {
    $(this).closest('tr').remove();
});