let btn_expand = document.querySelector('#expand');
let container_nav = document.querySelector('.container-nav');
let btn_add = document.querySelector('#add-button');
let container_addList = document.querySelector('.container-addList');



btn_expand.addEventListener('click', () => {
    container_nav.classList.toggle('active');
    btn_expand.classList.toggle('active');
});

btn_add.addEventListener('click', () => {
    container_addList.style.visibility = 'visible';
})