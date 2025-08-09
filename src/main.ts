import lottie from 'lottie-web';
import iconWhatsapp from './assets/icon-whatsapp.json?url';

// const logoEl = document.querySelector<HTMLElement>('#toolbar--logo')!;
const heroCtaWpp = document.querySelector<HTMLElement>('#hero--cta--icon')!;
const footerCtaWpp = document.querySelector<HTMLElement>('#footer--cta--icon')!;

// logoEl.addEventListener('click', (event) => {
//   event.preventDefault();
// });

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