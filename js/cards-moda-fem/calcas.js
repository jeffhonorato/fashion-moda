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

const modalCard4CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-card4-calca");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-card4-calca");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard4 = document.querySelector(".js-card4-calcaFem");
    detalhesCard4.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard4 = document.querySelector(".js-modal-card4-calcasFem");
        modalBoxCard4.classList.add("open"); 
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFechar = document.querySelector(".js-btnFechar-card4-calcasFem");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard4 = document.querySelector(".js-modal-card4-calcasFem");
        modalBoxCard4.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block"; 
        
    });
   
    
}

const modalCard5CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-card5-calca");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-card5-calca");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard5 = document.querySelector(".js-card5-calcaFem");
    detalhesCard5.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard5 = document.querySelector(".js-modal-card5-calcasFem");
        modalBoxCard5.classList.add("open"); 
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFechar = document.querySelector(".js-btnFechar-card5-calcasFem");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard5 = document.querySelector(".js-modal-card5-calcasFem");
        modalBoxCard5.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block"; 
        
    });
   
    
}

const modalCard6CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-card6-calca");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-card6-calca");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard6 = document.querySelector(".js-card6-calcaFem");
    detalhesCard6.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard6 = document.querySelector(".js-modal-card6-calcasFem");
        modalBoxCard6.classList.add("open"); 
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFechar = document.querySelector(".js-btnFechar-card6-calcasFem");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard6 = document.querySelector(".js-modal-card6-calcasFem");
        modalBoxCard6.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block"; 
        
    });
   
    
}

const modalCard7CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-card7-calca");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-card7-calca");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard7 = document.querySelector(".js-card7-calcaFem");
    detalhesCard7.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard7 = document.querySelector(".js-modal-card7-calcasFem");
        modalBoxCard7.classList.add("open"); 
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFechar = document.querySelector(".js-btnFechar-card7-calcasFem");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard7 = document.querySelector(".js-modal-card7-calcasFem");
        modalBoxCard7.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block"; 
        
    });
   
    
}






modalCard1CalcasFem();
modalCard2CalcasFem();
modalCard3CalcasFem();
modalCard4CalcasFem();
modalCard5CalcasFem();
modalCard6CalcasFem();
modalCard7CalcasFem();
