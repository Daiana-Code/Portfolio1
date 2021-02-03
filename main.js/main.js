$(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                    $('.navbar').addClass("stiky");
            }else{
                $('.navbar').removeClass("stiky");

            }
        })

        //menu/navbar
     $('.menu-btn').click(function(){
         $('.navbar.menu').toggleClass("active");
     });
});