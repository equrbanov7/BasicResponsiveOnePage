let hamburger = document.querySelector('#btn_nav');
let navBar = document.querySelector('.nav_list');
hamburger.addEventListener('click', function() {
    navBar.classList.toggle('active');
});