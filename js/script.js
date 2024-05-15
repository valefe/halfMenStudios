// Contador de carga
let counter = 0;
let loaderCounter = document.getElementById("loader-counter");

function count() {
  loaderCounter.textContent = counter;
  if (counter === 100) {
    clearInterval(interval);
    animateBackgrounds(); // Iniciar la animación cuando el contador llegue a 100
  }
  counter++;
}

let interval = setInterval(count, 30);

// Animación de los fondos
function animateBackgrounds() {
  const backgrounds = document.querySelectorAll(".background");
  backgrounds.forEach((bg, index) => {
    setTimeout(() => {
      bg.classList.add("move-up");
    }, index * 100);
  });

  // Mostrar contenido y ocultar loader al finalizar la animación
  const lastBackground = backgrounds[backgrounds.length - 1];
  lastBackground.addEventListener("animationend", function (event) {
    if (event.animationName === "moveUp") {
      document.querySelector(".loader").style.display = "none";
      document.querySelector(".content").style.display = "block";
    }
  });
}

$(document).ready(function(){
  
  $('.slider-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 0,
      responsive: [
      {
      breakpoint: 1024,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
      }
      },
      {
      breakpoint: 600,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
      }
  ]
  });
  $('.center').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000
});
  
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }