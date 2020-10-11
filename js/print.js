const swiperTriggers = document.querySelectorAll('.swiper-trigger');
const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('.close_card');

swiperTriggers.forEach(trigger => trigger.addEventListener('click', function(e){
    target = e.target;
    const productLi = target.closest('.product');
    modal.classList.add('appear');
    console.log(productLi); 
}))

closeModal.addEventListener('click', function () {
    modal.classList.remove('appear');
})
