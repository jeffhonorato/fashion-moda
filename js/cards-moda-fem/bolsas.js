const modalBolsasFemCard1 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card1-bolsa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card1-bolsa");
            imgGra.src = img.src;
        });
    });

    const detalhesCard1Fem = document.querySelector(".js-card1-bolsaFem");
    detalhesCard1Fem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-bolsasFem");
        modalCard1Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal1BlusaFem = document.querySelector(".js-btnFechar-card1-bolsasFem");
    btnFecharModal1BlusaFem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-bolsasFem");
        modalCard1Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

const modalBolsasFemCard2 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card2-bolsa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card2-bolsa");
            imgGra.src = img.src;
        });
    });

    const detalhesCard2Fem = document.querySelector(".js-card2-bolsaFem");
    detalhesCard2Fem.addEventListener("click", () => {
        const modalCard2Fem = document.querySelector(".js-modal-card2-bolsasFem");
        modalCard2Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModa21BlusaFem = document.querySelector(".js-btnFechar-card2-bolsasFem");
    btnFecharModa21BlusaFem.addEventListener("click", () => {
        const modalCard2Fem = document.querySelector(".js-modal-card2-bolsasFem");
        modalCard2Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

const modalBolsasFemCard3 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card3-bolsa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card3-bolsa");
            imgGra.src = img.src;
        });
    });

    const detalhesCard3Fem = document.querySelector(".js-card3-bolsaFem");
    detalhesCard3Fem.addEventListener("click", () => {
        const modalCard3Fem = document.querySelector(".js-modal-card3-bolsasFem");
        modalCard3Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModa31BlusaFem = document.querySelector(".js-btnFechar-card3-bolsasFem");
    btnFecharModa31BlusaFem.addEventListener("click", () => {
        const modalCard3Fem = document.querySelector(".js-modal-card3-bolsasFem");
        modalCard3Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

modalBolsasFemCard1()
modalBolsasFemCard2()
modalBolsasFemCard3()