const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup'); 
const closeIcon = document.querySelector('.close-icon');

loginLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

closeIcon.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});