let ready = (callback) => {
    if (document.readyState != 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
};

ready(() => {
    transparentHeader();
});

function transparentHeader() {
    let header = document.querySelector('#header');
    let about = document.querySelector('#about');
    if (about === null) return;
    window.addEventListener('scroll', function () {
        if (about.getBoundingClientRect().top > header.clientHeight) {
            header.classList.remove('header_scroll');
        } else {
            header.classList.add('header_scroll');
        }
    });
}
