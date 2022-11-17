const swiper = new Swiper('.swiper', {
    // Optional parameters    
    loop: true, 
   
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },     
  });

let tabsLink = document.querySelectorAll('.tabs__link');
console.log(tabsLink)
  


tabsLink.forEach((link) => {
  link.addEventListener('click', function(){
    link.classList.toggle('active');
  });
})