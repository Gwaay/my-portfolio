
const burger = document.getElementById('burgerBtn');
const nav = document.getElementById('mainNav');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
}

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href'); // например "#contacts"
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return; 

    e.preventDefault(); 

    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });


    if (nav.classList.contains('active')) {
      toggleMenu();
    }


    const heading = targetSection.querySelector('h2');
    if (heading) {
      heading.classList.add('highlight');


      setTimeout(() => {
        heading.classList.remove('highlight');
      }, 1500);
    }
  });
});


const track = document.getElementById('Track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateArrows() {
  prevBtn.disabled = track.scrollLeft <= 0;
  nextBtn.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 5;
}

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
});

track.addEventListener('scroll', updateArrows);
updateArrows(); 