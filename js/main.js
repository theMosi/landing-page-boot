let $ = document
let father = $.querySelector('body');


let navElem = $.querySelector('.header');


window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        navElem.classList.add('scroll-show');
    }else {
        navElem.classList.remove('scroll-show');
    }
})
