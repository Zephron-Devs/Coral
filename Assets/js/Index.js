var toggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
})


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});



  $(document).ready(function(){

 

    $('.testimonials').owlCarousel({
      items:1,
      margin:20,
      autoHeight:true
  });

    $('.classes').owlCarousel({
      loop:true,
      center: true,
      margin:5,
      autoHeight:true,
      responsiveClass:true,
      autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          900:{
              items:2,
              nav:false
          },
          1200:{
              items:3,
              nav:true,
              loop:true
          }
      }
  });
  });