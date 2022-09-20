let tempoDeRotacao = 3000;
let boxDeSlider = 0;
let sliders = document.querySelectorAll(".marca__box--slider");
let maximoDeSlider = sliders.length;


const nextImage = () => {

    sliders[boxDeSlider].classList.remove("selected")

    boxDeSlider++;

    if(boxDeSlider >= maximoDeSlider) {
        boxDeSlider = 0;
    }

    sliders[boxDeSlider].classList.add("selected")
}

const marcas = () => {
    setInterval(() => {
        //TROCA DE IMAGEM
        nextImage();
    }, tempoDeRotacao)
}

window.addEventListener("load", marcas);