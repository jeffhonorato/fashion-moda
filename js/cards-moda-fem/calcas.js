// CARDS MODA FEMININA - CALÇAS // 
const modalCard1CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card1");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card1");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector(".js-btn1-detalhes-calca");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard1 = document.querySelector(".js-modal__card1__calca");
        modalBoxCard1.classList.add("show"); 
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card1-calca");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard1 = document.querySelector(".js-modal__card1__calca");
        modalBoxCard1.classList.remove("show");
        
    });
   
    
}


modalCard1CalcasFem();

