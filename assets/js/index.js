const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

function openMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

document.querySelectorAll(".close-menu").forEach(e => {
    e.addEventListener('click', closeMenu)
})

function closeMenu() {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);