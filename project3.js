let menu = document.querySelector('#if');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('fa-solid');
    navlist.classList.toggle('open');
}