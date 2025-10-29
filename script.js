const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

// Scroll: color activo menú
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// Toggle menú hamburguesa
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active"); // anima la X
});

// Cerrar menú al pulsar un enlace
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if(nav.classList.contains("active")){
      nav.classList.remove("active");
      hamburger.classList.remove("active"); // vuelve a hamburguesa
    }
  });
});


// LIGHTBOX PARA IMÁGENES
const images = document.querySelectorAll('.clickable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) lightbox.style.display = 'none';
});
