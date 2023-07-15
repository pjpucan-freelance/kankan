const mobile_nav_btns = document.querySelectorAll('.js-menu-btn');

if(mobile_nav_btns) {
    mobile_nav_btns.forEach(btn => {
        btn.addEventListener('click', toggleDrawer)
    })
}

function toggleDrawer() {
    const nav = document.querySelector('#mobile-navigation');

    nav.classList.toggle('open');
}