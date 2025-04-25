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