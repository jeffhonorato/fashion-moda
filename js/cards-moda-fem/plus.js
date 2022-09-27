const modalPlusFemCard1 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card1-plus");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card1-plus");
            imgGra.src = img.src;
        });
    });

    const detalhesCard1Fem = document.querySelector(".js-card1-plusFem");
    detalhesCard1Fem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-plusFem");
        modalCard1Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal1BlusaFem = document.querySelector(".js-btnFechar-card1-plusFem");
    btnFecharModal1BlusaFem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-plusFem");
        modalCard1Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}

const modalPlusFemCard2 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card2-plus");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card2-plus");
            imgGra.src = img.src;
        });
    });

    const detalhesCard2Fem = document.querySelector(".js-card2-plusFem");
    detalhesCard2Fem.addEventListener("click", () => {
        const modalCard2Fem = document.querySelector(".js-modal-card2-plusFem");
        modalCard2Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal2BlusaFem = document.querySelector(".js-btnFechar-card2-plusFem");
    btnFecharModal2BlusaFem.addEventListener("click", () => {
        const modalCard2Fem = document.querySelector(".js-modal-card2-plusFem");
        modalCard2Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}

const modalPlusFemCard3 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card3-plus");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card3-plus");
            imgGra.src = img.src;
        });
    });

    const detalhesCard3Fem = document.querySelector(".js-card3-plusFem");
    detalhesCard3Fem.addEventListener("click", () => {
        const modalCard3Fem = document.querySelector(".js-modal-card3-plusFem");
        modalCard3Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal3BlusaFem = document.querySelector(".js-btnFechar-card3-plusFem");
    btnFecharModal3BlusaFem.addEventListener("click", () => {
        const modalCard3Fem = document.querySelector(".js-modal-card3-plusFem");
        modalCard3Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}

const modalPlusFemCard4 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card4-plus");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card4-plus");
            imgGra.src = img.src;
        });
    });

    const detalhesCard4Fem = document.querySelector(".js-card4-plusFem");
    detalhesCard4Fem.addEventListener("click", () => {
        const modalCard4Fem = document.querySelector(".js-modal-card4-plusFem");
        modalCard4Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal4BlusaFem = document.querySelector(".js-btnFechar-card4-plusFem");
    btnFecharModal4BlusaFem.addEventListener("click", () => {
        const modalCard4Fem = document.querySelector(".js-modal-card4-plusFem");
        modalCard4Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}

modalPlusFemCard1();
modalPlusFemCard2();
modalPlusFemCard3();
modalPlusFemCard4();