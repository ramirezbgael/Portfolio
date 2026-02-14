/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  if(window.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')
      // overlay = document.getElementById('services_modal-overlay')
let modal = function(modalCLick){
  modalViews[modalCLick].classList.add('active-modal')
  // overlay.classList.add('active')
}

modalBtns.forEach((mb,i) =>{
  mb.addEventListener('click', () =>{
    modal(i)
  })
})

modalClose.forEach((mc) =>{
  mc.addEventListener('click', ()=>{
    modalViews.forEach((mv) =>{
      mv.classList.remove('active-modal')
    })
  })
})

// overlay.addEventListener('click', () =>{
//   const modals = document.querySelectorAll('active-modal')
//   modals.forEach(modal =>{
    
//   })
// })
/*=============== SWIPER PORTFOLIO CAROUSEL ===============*/
let swiperPortfolio = new Swiper(".work_swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  mousewheel: {
    enabled: true,
    forceToAxis: true,
    sensitivity: 1,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: false,
    },
  },
});


/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial_container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')

  
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
  document.body.classList.toggle(lightTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Software Developer", 
    "Problem Solver", 
    "Critical Thinker", 
    "Computer Enthusiast"
  ];

  let currentPhrase = 0;
  const dynamicTextElement = document.getElementById("dynamic-text");

  setInterval(() => {
    dynamicTextElement.textContent = phrases[currentPhrase];
    currentPhrase = (currentPhrase + 1) % phrases.length; // Cambiar al siguiente
  }, 1100); // Cambia cada 2 segundos
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.home_data')
sr.reveal('.home_handle', {delay: 700})
sr.reveal('.home_social, .home_scroll', {delay: 900, origin:'bottom'})
sr.reveal('.home_data')
