let paginaAtual = 1;

const paginas = document.querySelectorAll(".page");
const totalPaginas = paginas.length;

const botoesProx = document.querySelectorAll(".prox");
const botoesAnt = document.querySelectorAll(".ant");

function mostrarPagina(num) {
    paginas.forEach(pagina => {
        pagina.classList.remove("visible");
        pagina.style.display = "none";
    });

    const atual = document.getElementById("page" + num);
    if (atual) {
        atual.style.display = "block";
        atual.classList.add("visible");
    }
}

window.onload = () => {
    mostrarPagina(paginaAtual);
};

botoesProx.forEach(botao => {
    botao.addEventListener("click", () => {
        if (paginaAtual < totalPaginas) {
            paginaAtual++;
            mostrarPagina(paginaAtual);
        }
    });
});

botoesAnt.forEach(botao => {
    botao.addEventListener("click", () => {
        if (paginaAtual > 1) {
            paginaAtual--;
            mostrarPagina(paginaAtual);
        }
    });
});


// CARROSSEL
let indiceAtual = 0;

function atualizarCarrossel() {
  const slides = document.getElementById('slides');
  slides.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

function proximo() {
  const totalSlides = document.querySelectorAll('.slide').length;
  if (indiceAtual < totalSlides - 1) {
    indiceAtual++;
    atualizarCarrossel();
  }
}

function voltar() {
  if (indiceAtual > 0) {
    indiceAtual--;
    atualizarCarrossel();
  }
}
// MOSTRAR BOTOES
let carrossel = document.getElementById("carrosselId");
let botoesCarrossel = document.querySelectorAll(".botoesCarrosselProject");

function mostrarBotoes() {
  botoesCarrossel.forEach(botao => {
    botao.style.animation = "fadeIn 0.5s forwards";
  });
}

function esconderBotoes() {
  botoesCarrossel.forEach(botao => {
    botao.style.animation = "fadeOut 0.5s forwards";
  });
}

carrossel.addEventListener("mouseenter", mostrarBotoes);
carrossel.addEventListener("mouseleave", esconderBotoes);
