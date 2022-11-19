const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnDots = $$('.dot-item');
const innerSlide = $('.inner-slide');
const widthSlide = $$('.slide-item')[0].offsetWidth;
const navbars = $$('.header__navbar-link')
btnDots.forEach((btn, index) => {
    navbars[index].onclick = btn.onclick = function(e) {
        $('.dot-item.dot-active').classList.remove('dot-active')
        btn.classList.add('dot-active')   
        $('.header__navbar-link.active').classList.remove('active')
        navbars[index].classList.add('active')
        let transformPos = -(index * widthSlide)
        innerSlide.style = `transform: translateX(${transformPos}px);`
    }
})




