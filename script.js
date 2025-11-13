//Selecciona todas las secciones section
const sections = document.querySelectorAll("section");
//Selecciona todos los enlaces dentro del menu de navegación
const navLinks = document.querySelectorAll("nav a");
//Selecciona el boton hamburguesa para el menu movil
const hamburger = document.querySelector(".hamburger");

//Selecciona el elemento <nav> completo
const nav = document.querySelector("nav");

// Scroll: color activo menú
window.addEventListener("scroll", () => {
  let current = "";//Guarda el id de la sección actual visible

  //Recorre todas las secciones del documento
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    // Posición superior de la sección menos 80px (para compensar la navbar)

    // Si el scroll vertical actual ha pasado la parte superior de la sección:
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");// Guarda el id de esa sección (por ejemplo, "sobre-mi")
    }
  });

  //Recorre todos los enlaces del menu de navegación
  navLinks.forEach((a) => {
    a.classList.remove("active");// Quita la clase "active" de todos los enlaces
    // Si el enlace contiene el id de la sección actual en su href...
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");//...añade la clase "active" solo a ese enlace
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

//Cuando se hace clic en una imagen 
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;//Pone en grande la misma imagen
    });
});

//Cuando se hace clic en la x se oculta el lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

//Si el usuario hace click fuera de la imagen se oculta el lightbox
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) lightbox.style.display = 'none';
});
