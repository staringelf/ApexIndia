/* Navigate*/

const toggleAsideButton = document.querySelector('#side-toggle');
const aside = document.querySelector('#aside');

function toggleAside(){
    aside.classList.toggle('open');
    toggleAsideButton.classList.toggle('rotate');
}

toggleAsideButton.addEventListener('click', toggleAside);
