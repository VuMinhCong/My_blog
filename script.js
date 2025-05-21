/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    // const scrollY = window.pageYOffset
    const currentLang = document.body.getAttribute('data-lang') || 'ja';

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']').forEach(link => {
            if(link.getAttribute('lang') === currentLang && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    })
}
/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 900,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 80})
sr.reveal('.home__img', {origin:'right', delay: 160})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 120})
sr.reveal('.about__subtitle', {delay: 80})
sr.reveal('.about__profession', {delay: 100})
sr.reveal('.about__text', {delay: 120})
sr.reveal('.about__social-icon', {delay: 150, interval: 80})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 30, interval: 60})
sr.reveal('.skills__img', {delay: 120})

/*SCROL PROJECT*/
sr.reveal('.project__img', {interval: 100})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 40})
sr.reveal('.contact__input', {delay: 40})
sr.reveal('.contact__button', {delay: 140})

// Language Switcher
function switchLanguage(lang) {
    const currentLang = document.body.getAttribute('data-lang');
    if (currentLang !== lang) {
        document.body.setAttribute('data-lang', lang);
        localStorage.setItem('preferred-language', lang);
        location.reload();
    }
}

// Set initial language based on user's  or default to Japanese
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferred-language') || 'ja';
    document.body.setAttribute('data-lang', savedLang);
});




