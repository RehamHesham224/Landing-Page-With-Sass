
$(function () {
   //accordion arrow
    $('.collapse').on("shown.bs.collapse", function(){
        $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
    }).on("hidden.bs.collapse", function(){
        $(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
    })
//change content on click taps
    $(".why-choose__first-tap").on("click",()=>{
        $(".why-choose__last").html(`
        <h1>3 hour Format</h1>
    <p class="text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil explicabo, laborum magnam quaerat mollitia harum illum . </p>
    <h1>4 simple step</h1>
    <p class="text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil explicabo, laborum magnam quaerat mollitia harum illum . </p>
    `);
    $(".why-choose__first-tap").addClass("why-choose__bg--prim").siblings().removeClass("why-choose__bg--prim");
    })

    $(".why-choose__second-tap").on("click",()=>{
        $(".why-choose__last").html(`
        <h1>20 hour sleep</h1>
    <p class="text-muted mb-5">dolor sit amet consectetur, adipisicing elit. Odio, quia, consectetur maiores perspiciatis ipsam veritatis sunt optio quibusdam . </p>
    <h1>4 simple dishes</h1>
    <p class="text-muted mb-5">dolor sit amet consectetur, adipisicing elit. Odio, quia, consectetur maiores perspiciatis ipsam veritatis sunt optio quibusdam . </p>
    `);
    $(".why-choose__second-tap").addClass("why-choose__bg--prim").siblings().removeClass("why-choose__bg--prim");
    })


    $(".why-choose__third-tap").on("click",()=>{
        $(".why-choose__last").html(`
        <h1>5 hours journy</h1>
    <p class="text-muted mb-5">dolor sit amet consectetur, adipisicing elit. Odio, quia, consectetur maiores perspiciatis ipsam veritatis sunt optio quibusdam . </p>
    <h1>4 steps to success</h1>
    <p class="text-muted mb-5">dolor sit amet consectetur, adipisicing elit. Odio, quia, consectetur maiores perspiciatis ipsam veritatis sunt optio quibusdam . </p>
    `);
    $(".why-choose__third-tap").addClass("why-choose__bg--prim").siblings().removeClass("why-choose__bg--prim");
    })

    
});
$(window).scroll(function () {
    var midNav = $(".middle-nav").outerHeight( true );
    var topNav =$(".top-nav").outerHeight( true );
    var topHeight=midNav + topNav;
    //sticky nav
    if($(window).scrollTop()>135){
        $(".navbar").css({
            "position":"fixed",
            "top":0,
            "backgroundColor":"#3f5a90d0"
        })
    }else{
        $(".navbar").css({
            "position":"absolute",
            "top":topHeight,
            "backgroundColor":"#3f5a90",
        })
        
    }
   

})




//spinner
window.onload = function () {
  //hide spinner
  $('.spinner').delay(2000).fadeOut('slow');
}
 

  //bootstrap
$('body').scrollspy({ target: '#main-nav' });
  
// Smooth Scrolling
$("#main-nav a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function () {

        window.location.hash = hash;
        });
    }
});




// $(window).resize(function() {
        //     var width = $(window).width();
        //     if (width > 1200){
        //         $(".navbar").css({"top":"13.5rem"});
        //     }
        //     else if (width < 1200 && width > 991){
        //         $(".navbar").css({"top":"13rem"});
        //     }
        //     else if (width < 990 && width > 768){
        //         $(".navbar").css({"top":"15rem"});
        //     }
        //     else if (width < 768){
        //         $(".navbar").css({"top":"10.5rem"});
        //     }
        //   });