
//Page Timeline

const herotl = gsap.timeline()

herotl
    .from("nav", {duration: 0.7, y:'-100%', ease: "power1.out"})
    .from("#down-btn", {duration: 0.7, opacity: 0, stagger: .5}, "<.2")
    .from(".social-btns", {duration: 0.1, opacity: 0, stagger: .5},"-= 1")
    .from("#hero-content h1", {duration: 0.7, opacity: 0, stagger: .5, onComplete: () => masterTl.play()})  

TweenMax.to("#down-btn i", {duration: 0.5, scaleX: 1.05, scaleY:1.1, repeat: -1, ease: "power.inOut"} )

//typewriter animation
const words = ["David Tran", "A Math/Computer Science Student", "A Front End Developer"];

let cursor = gsap.to(".cursor", {opacity: 0, ease: "power2.inOut", repeat: -1});

let masterTl = gsap.timeline({repeat: -1}).pause();

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 0.8})
    tl.to('.text', {duration: 0.7, text: word})
    masterTl.add(tl);
})


// Parallax code //
let rellax = new Rellax('.rellax');

ScrollOut({
    once: true 
})

//scrolling and active class code 
const pagesections = document.querySelectorAll('.pagesection');
const navitem = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('nav');

if (screen.height <= 900){
    navbar.classList.add('scrolling-active');
}

if (window.scrollY > 0){
    navbar.classList.add('scrolling-active')
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

//Projects Card Animation

const cardtl = new TimelineMax({paused: true});

cardtl
    .from("#moviedex", {duration: 0.3, opacity: 0, ease: "power1.out"})
    .from("#refresh", {duration: 0.3, opacity: 0, ease: "power1.out"}, "<.3")
    .from("#necessities", {duration: 0.3, opacity: 0, ease: "power1.out"}, "<.3")
    .from("#closedweather", {duration: 0.3, opacity: 0, ease: "power1.out"}, "<.3")
    .from("#eduquat", {duration: 0.3, opacity: 0, ease: "power1.out"}, "<.3")

let controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '#projects'
}) 
    .setTween(cardtl)
    .reverse(false)
    .addTo(controller);


// Contact form code

const submit = document.querySelector("#submit");
const inputs = document.querySelector("#contact-form");

submit.addEventListener('click', (e) => {
    e.preventDefault();
    Email.send({
        Host:"smtp.elasticemail.com",
        Username: "davtran26@gmail.com",
        Password: "DF02E5618704985C25ED44696673F6C6703F",
        To: "davtran26@gmail.com",
        From: inputs.elements["email"].value,
        Subject:"Message sent from portfolio site.",
        Body:inputs.elements["Message"].value + "<br>" + inputs.elements["FirstName"].value + inputs.elements["LastName"].value
    }).then(msg => alert("Message Successfully Sent"))
})