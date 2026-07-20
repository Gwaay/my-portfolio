/* ============================================
   1. МОБИЛЬНОЕ МЕНЮ (бургер + затемнение фона)
   ============================================ */
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

/* ============================================
   2. ПРОКРУТКА К РАЗДЕЛУ + ПОДСВЕТКА ЗАГОЛОВКА
   Работает для любой ссылки вида href="#id" —
   то есть сразу для пунктов меню, кнопки "Связаться"
   в шапке и кнопки "Написать мне" в блоке "Обо мне"
   ============================================ */
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href'); // например "#contacts"
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return; // если раздела с таким id нет — ничего не делаем

    e.preventDefault(); // отменяем резкий прыжок браузера по умолчанию

    // плавно прокручиваем страницу к разделу
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // если мобильное меню было открыто — закрываем его
    if (nav.classList.contains('active')) {
      toggleMenu();
    }

    // подсвечиваем заголовок h2 внутри этого раздела
    const heading = targetSection.querySelector('h2');
    if (heading) {
      heading.classList.add('highlight');

      // через 1.5 секунды подсветка сама гаснет
      setTimeout(() => {
        heading.classList.remove('highlight');
      }, 1500);
    }
  });
});

/* ============================================
   3. СТРЕЛКИ В БЛОКЕ "МОИ ПРОЕКТЫ"
   ============================================ */
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
updateArrows(); // проверяем сразу при загрузке страницы