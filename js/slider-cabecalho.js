// SLIDER CABEÇALHO
let tempo = 3000;
let imagemAtual = 0;
let imagens = document.querySelectorAll("#slider img");
let maximoDeImagens = imagens.length;

const loopDeImagens = () => {
    
    imagens[imagemAtual].classList.remove("selected")
    
    imagemAtual++;

    if(imagemAtual >= maximoDeImagens) {
        imagemAtual = 0;
    }

    imagens[imagemAtual].classList.add("selected")
}

const start = () => {
    setInterval(() => {
        // troca de imagem
    loopDeImagens()
    }, tempo)
}

window.addEventListener("load", start);