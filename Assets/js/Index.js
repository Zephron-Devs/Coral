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
      margin:10,
      autoHeight:true
  });

    $('.classes').owlCarousel({
      items:3,
      loop:true,
      margin:10,
      autoHeight:true,
      responsiveClass:true,
      autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:3,
              nav:true,
              loop:true
          }
      }
  });
  });