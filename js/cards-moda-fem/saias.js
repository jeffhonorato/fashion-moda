const modalCard1SaiasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card1-saia");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card1-saia");
            imgGra.src = img.src;
        });
    });

    const detalhesCard1Fem = document.querySelector(".js-card1-saiaFem");
    detalhesCard1Fem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-saiasFem");
        modalCard1Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal1BlusaFem = document.querySelector(".js-btnFechar-card1-saiasFem");
    btnFecharModal1BlusaFem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-saiasFem");
        modalCard1Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}

const modalCard2SaiasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card2-saia");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card2-saia");
            imgGra.src = img.src;
        });
    });

    const detalhesCard2Fem = document.querySelector(".js-card2-saiaFem");
    detalhesCard2Fem.addEventListener("click", () => {
        const modalCard2Fem = document.querySelector(".js-modal-card2-saiasFem");
        modalCard2Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal2BlusaFem = document.querySelector(".js-btnFechar-card2-saiasFem");
    btnFecharModal2BlusaFem.addEventListener("click", () => {
        const modalCard2Fem = document.querySelector(".js-modal-card2-saiasFem");
        modalCard2Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}

const modalCard3SaiasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card3-saia");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card3-saia");
            imgGra.src = img.src;
        });
    });

    const detalhesCard3Fem = document.querySelector(".js-card3-saiaFem");
    detalhesCard3Fem.addEventListener("click", () => {
        const modalCard3Fem = document.querySelector(".js-modal-card3-saiasFem");
        modalCard3Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal3BlusaFem = document.querySelector(".js-btnFechar-card3-saiasFem");
    btnFecharModal3BlusaFem.addEventListener("click", () => {
        const modalCard3Fem = document.querySelector(".js-modal-card3-saiasFem");
        modalCard3Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}

const modalCard4SaiasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card4-saia");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card4-saia");
            imgGra.src = img.src;
        });
    });

    const detalhesCard4Fem = document.querySelector(".js-card4-saiaFem");
    detalhesCard4Fem.addEventListener("click", () => {
        const modalCard4Fem = document.querySelector(".js-modal-card4-saiasFem");
        modalCard4Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal4BlusaFem = document.querySelector(".js-btnFechar-card4-saiasFem");
    btnFecharModal4BlusaFem.addEventListener("click", () => {
        const modalCard4Fem = document.querySelector(".js-modal-card4-saiasFem");
        modalCard4Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}






modalCard1SaiasFem();
modalCard2SaiasFem();
modalCard3SaiasFem();
modalCard4SaiasFem();
