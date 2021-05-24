//Page Timeline

const herotl = gsap.timeline()

herotl
    .from("nav", {duration: 1, y:'-100%', ease: "power1.out"})
    .from("#down-btn", {duration: 1, opacity: 0, stagger: .5}, "<.5")
    .from(".social-btns", {duration: 0.5, opacity: 0, stagger: .5},"< .5")
    .from("#hero-content h1", {duration: 1, opacity: 0, stagger: .5, onComplete: () => masterTl.play()},"< .75")  

TweenMax.to("#down-btn i", {duration: 0.5, scaleX: 1.05, scaleY:1.1, repeat: -1, ease: "power.inOut"} )

//typewriter animation
const words = ["David Tran", "A Math/Computer Science Student", "A Front End Developer"];

let cursor = gsap.to(".cursor", {opacity: 0, ease: "power2.inOut", repeat: -1});

let masterTl = gsap.timeline({repeat: -1}).pause();

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration: 1, text: word})
    masterTl.add(tl);
})


// Parallax code //
let rellax = new Rellax('.rellax');

ScrollOut({
    threshold: .6,
    once: true 
})

//scrolling and active class code 
const pagesections = document.querySelectorAll('.pagesection');
const navitem = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('nav');

if (screen.height <= 900){
    navbar.classList.add('scrolling-active');
}

window.addEventListener('scroll', () => {
    let current = '';

    pagesections.forEach( pagesection => {
        const pagesectionTop = pagesection.offsetTop;
        const pagesectionHeight = pagesection.clientHeight;

        if (pageYOffset > (pagesectionTop - pagesectionHeight / 3)){
            current = pagesection.getAttribute('id');
        }

    });

    navitem.forEach( li => {
        li.classList.remove('active');

        if (li.classList.contains(current)){
            li.classList.add('active');
        }
    });
    
    navbar.classList.toggle('scrolling-active', window.scrollY > 0);

    if (screen.height <= 900){
        navbar.classList.add('scrolling-active');
    }
    
});
