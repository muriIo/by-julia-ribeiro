import lottie from 'lottie-web';
import iconWhatsapp from './assets/icon-whatsapp.json?url';

const heroCtaWpp = document.querySelector<HTMLElement>('#hero--cta--icon')!;
const footerCtaWpp = document.querySelector<HTMLElement>('#footer--cta--icon')!;

lottie.loadAnimation({
    container: heroCtaWpp,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `${iconWhatsapp}`
});

lottie.loadAnimation({
    container: footerCtaWpp,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `${iconWhatsapp}`
});

const btnGetInTouch = document.querySelectorAll<HTMLButtonElement>('.btnGetInTouch');

if (btnGetInTouch) {
    btnGetInTouch?.forEach(btn => btn.addEventListener('click', getInTouch));
}

function getInTouch() {
    const whatsappURL = `https://wa.me/${5515988334964}?text=${`Olá, quero agendar um atendimento!`}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
}

const elements = document.querySelectorAll(".on-scroll-animate");
let nextElementToAnimate = 'right';

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (nextElementToAnimate == 'right') {
                entry.target.classList.add("motion-safe:animate-slide-in-right", "[animation-delay:200ms]");
                nextElementToAnimate = 'left';
            } else if (nextElementToAnimate == 'left') {
                entry.target.classList.add("motion-safe:animate-slide-in-left", "[animation-delay:200ms]");
                nextElementToAnimate = 'right';
            }

            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 }); // Trigger when 20% of the element is visible

elements.forEach((el) => observer.observe(el));