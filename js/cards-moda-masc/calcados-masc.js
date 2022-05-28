modalCard1CalcadosMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card1");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card1");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector(".js-btn1-detalhes-blusasMasc");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal__card1__blusasMasc");
        modalBox1.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card1-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal__card1__blusasMasc");
        modalBox1.classList.remove("show");
    });
} 

modalCard1CalcadosMasc();