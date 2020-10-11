const swiperTriggers = document.querySelectorAll('.swiper-trigger');
const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('.close_card');
let swiper;


swiperTriggers.forEach(trigger => trigger.addEventListener('click', function(e){
    target = e.target;
    const productLi = target.closest('.product');
    modal.classList.add('appear');
    // console.log(productLi); 
    
    swiper = new Swiper('.swiper-container', {
        loop: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
  
        pagination: {
          el: '.swiper-pagination',
        },
      });
}))

closeModal.addEventListener('click', function () {
    modal.classList.remove('appear');
    swiper.destroy();
})
