

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 10)
})



// question answer

const faqs= document.querySelectorAll('.faq');

faqs.forEach(faq => {

    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

        //change icon
        const icon= faq.querySelector('.faq__icon i');
        if (icon.className==='uil uil-plus') {
            icon.className='uil uil-minus';
        }
        else{
            icon.className='uil uil-plus';
        }
    })
})


//show/hide navbar

const menu= document.querySelector('.nav__menu');
const menuBtn= document.querySelector('#open-menu-btn');
const closeBtn= document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click',() => {
    menu.style.display='flex';
    menuBtn.style.display='none';
    closeBtn.style.display='block';
    
})

const closeNav= () => {
    menu.style.display='none';
    menuBtn.style.display='block';
    closeBtn.style.display='none';
}
closeBtn.addEventListener('click',closeNav);



///Reveal Animation

    ScrollReveal({
        origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
    });


    ScrollReveal().reveal('.header__left' ,{});
    ScrollReveal().reveal('.header__right' ,{delay: 400});
    ScrollReveal().reveal('.about__achievements__left' ,{});
    ScrollReveal().reveal('.about__achievements__right' ,{delay: 400});
    ScrollReveal().reveal('.home__social-icon' ,{interval: 200});
    ScrollReveal().reveal('.categories__text', {});
    ScrollReveal().reveal('.categories__right', {delay: 400});
    ScrollReveal().reveal('.team__member', {delay: 200});
    ScrollReveal().reveal('.', {});
    ScrollReveal().reveal('.', { });
    ScrollReveal().reveal('.media-info li', { });


