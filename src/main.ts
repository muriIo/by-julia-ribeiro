import './style.css'
import logo from './assets/logo.png';
import face from './assets/julia-ribeiro.jpg';
import lottie from 'lottie-web';

const html = /*html*/`
  <nav id="toolbar">
    <figure id="toolbar--logo">
      <img src="${logo}" alt="Logo da marca By Julia Ribeiro"/>
    </figure>
    <ul id="toolbar--list">
      <li>
        <a href="#">Sobre mim</a>
      </li>
      <li>
        <a href="#">Portfólio</a>
      </li>
      <li>
        <a href="#">Contato</a>
      </li>
    </ul>
  </nav>
  <main id="hero">
    <figure id="hero--face">
      <img src="${face}" alt="Foto de perfil da Julia Ribeiro, Nail Designer"/>
    </figure>
    <section id="hero--cta">
      <h1>Onde suas unhas ganham vida e cor</h1>
      <h2>Alongamentos, esmaltações e banho em gel com estilo e delicadeza</h2>
      <button>
        <figure id="hero--cta--icon">
        </figure>
        <span id="hero--cta--text">Agende seu horário</span>
      </button>
    </section>
  </main>
  <footer>
    Footer
  </footer>
`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = html;

const logoEl = document.querySelector<HTMLElement>('#toolbar--logo')!;
const ctaWpp = document.querySelector<HTMLElement>('#hero--cta--icon')!;

logoEl.addEventListener('click', (event) => {
  event.preventDefault();
});

lottie.loadAnimation({
  container: ctaWpp,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'src/assets/icon-whatsapp.json'
});