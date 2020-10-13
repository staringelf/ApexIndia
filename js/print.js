const swiperTriggers = document.querySelectorAll('.swiper-trigger');
const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('.close_card');
const swiperWrapper = document.querySelector('.swiper-wrapper');
let swiper;
let category = 'box';

swiperTriggers.forEach(trigger => trigger.addEventListener('click', function(e){
    target = e.target;
    const productLi = target.closest('.product--design');
    console.log(productLi);
    category = productLi.dataset.category;
    console.log(category);
    modal.classList.add('appear');
    document.body.classList.add('unscroll');
      for(let x = 0; x < 3; x++){
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperSlide.innerHTML = `<img src="products/design/${category}-${x+1}.jpg" alt="" >`;
        swiperWrapper.appendChild(swiperSlide);
      }

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
    swiperWrapper.textContent = '';
    document.body.classList.remove('unscroll');
})
