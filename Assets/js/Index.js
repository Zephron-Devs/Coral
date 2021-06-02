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

var swiper = new Swiper(".showcase", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  $(document).ready(function(){
    $('.testimonials').owlCarousel({
      items:1,
      margin:10,
      autoHeight:true
  });
  });