const modalTriggers = document.querySelectorAll('.modal-trigger');
const closeModalButton = document.querySelector('.close_card');
const modal = document.querySelector('.modal');

modalTriggers.forEach(trigger => trigger.addEventListener('click', function (e) {
    modal.classList.add('appear');
    document.body.classList.add('unscroll');
    modal.querySelector('img').src = e.target.src;
}))

closeModalButton.addEventListener('click', function (){
    modal.classList.remove('appear');
    document.body.classList.remove('unscroll');
})

