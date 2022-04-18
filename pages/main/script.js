// Burger handler

(function () {
const burgerItem = document.querySelector('.burger');

console.log (burgerItem);

const menu = document.querySelector('.header_nav-menu');
const menuCloseItem = document.querySelector('.header_nav-menu-close');

burgerItem.addEventListener(click, () => {
    menu.classList.add('header_nav-menu_active');
    });
menuCloseItem.addEventListener(click, () => {
    menu.classList.remove('header_nav-menu_active');
    });
}());