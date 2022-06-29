// CARDS MODA FEMININA - CALÇAS // 
const modalCard1CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-card1-calca");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-card1-calca");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector(".js-card1-calcaFem");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard1 = document.querySelector(".js-modal-card1-calcasFem");
        modalBoxCard1.classList.add("open"); 
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFechar = document.querySelector(".js-btnFechar-card1-calcasFem");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard1 = document.querySelector(".js-modal-card1-calcasFem");
        modalBoxCard1.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block"; 
        
    });
   
    
}


modalCard1CalcasFem();

