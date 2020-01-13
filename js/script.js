let doc = document;

let ready = (callback) => {
    if (doc.readyState != 'loading') callback();
    else doc.addEventListener('DOMContentLoaded', callback);
};

ready(() => {
    transparentHeader();
    openNav();
});

function transparentHeader() {
    let header = doc.querySelector('#header');
    let about = doc.querySelector('#about');
    if (about === null) return;
    window.addEventListener('scroll', function () {
        if (about.getBoundingClientRect().top > header.clientHeight) {
            header.classList.remove('header_scroll');
        } else {
            header.classList.add('header_scroll');
        }
    });
}

function openNav() {
    let burger          = doc.querySelector('.header-burger');
    let nav             = doc.querySelector('.main-nav');
    let checkScrollLock = false;

    if (burger) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('header-burger_open');
            nav.classList.toggle('main-nav_open');
        });
    }
}
