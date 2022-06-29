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

const modalCard2CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-card2-calca");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-card2-calca");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard2 = document.querySelector(".js-card2-calcaFem");
    detalhesCard2.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard2 = document.querySelector(".js-modal-card2-calcasFem");
        modalBoxCard2.classList.add("open"); 
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFechar = document.querySelector(".js-btnFechar-card2-calcasFem");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard2 = document.querySelector(".js-modal-card2-calcasFem");
        modalBoxCard2.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block"; 
        
    });
   
    
}

const modalCard3CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-card3-calca");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-card3-calca");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard3 = document.querySelector(".js-card3-calcaFem");
    detalhesCard3.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard3 = document.querySelector(".js-modal-card3-calcasFem");
        modalBoxCard3.classList.add("open"); 
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFechar = document.querySelector(".js-btnFechar-card3-calcasFem");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard3 = document.querySelector(".js-modal-card3-calcasFem");
        modalBoxCard3.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block"; 
        
    });
   
    
}


modalCard1CalcasFem();
modalCard2CalcasFem();
modalCard3CalcasFem();

