document.getElementById('about-link').addEventListener('click', () => {
    document.getElementById('about-2').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('habi-link').addEventListener('click', () => {
    document.getElementById('habilities').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('projeto-link').addEventListener('click', () => {
    document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contato-link').addEventListener('click', () => {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});

// carrossel
const carouselSlide = document.getElementById('carouselSlide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

function updateCarousel() {
    const size = carouselItems[0].clientWidth; // pegar o tamanho atualizado
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener('click', () => {
    if (counter >= carouselItems.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = carouselItems.length - 1;
    } else {
        counter--;
    }
    updateCarousel();
});

// Atualizar tamanho também quando redimensionar
window.addEventListener('resize', updateCarousel);

// Inicializa posição correta
window.addEventListener('load', updateCarousel);

// botao atalho topo
const btnTopo = document.getElementById('btnTopo');

// Mostrar ou esconder o botão conforme o scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Quando rolar mais de 200px
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});

// Função para voltar suavemente ao topo
btnTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
