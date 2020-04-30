// Menu
let efeito = true;

const navBar = document.querySelector('#navBar');
const navToggle = navBar.querySelector('.navToggle');

navToggle.addEventListener('click', ()=>{

  document.body.style.overflow = efeito?'hidden':'initial';

  navBar.classList.toggle('on', efeito);
  efeito = !efeito;
})

// Slider
let time = 3000,
    imgTime = 0,
    images = document.querySelectorAll('#slider img'),
    maxImage = images.length;

function nextImage(){
  images[imgTime].classList.remove('selected');

  imgTime++;

  if(imgTime>=maxImage){
    imgTime=0;
  }

  images[imgTime].classList.add('selected');
}

function start(){
  setInterval(()=>{
    
    nextImage();

  }, time)
}

window.addEventListener('load', start);