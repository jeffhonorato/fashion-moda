const modalCalcadosFemCard1 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card1-calcados");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card1-calcados");
            imgGra.src = img.src;
        });
    });

    const detalhesCard1Fem = document.querySelector(".js-card1-calcadoFem");
    detalhesCard1Fem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-calcadosFem");
        modalCard1Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal1BlusaFem = document.querySelector(".js-btnFechar-card1-calcadosFem");
    btnFecharModal1BlusaFem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-calcadosFem");
        modalCard1Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}

const modalCalcadosFemCard2 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card2-calcados");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card2-calcados");
            imgGra.src = img.src;
        });
    });

    const detalhesCard2Fem = document.querySelector(".js-card2-calcadoFem");
    detalhesCard2Fem.addEventListener("click", () => {
        const modalCard2Fem = document.querySelector(".js-modal-card2-calcadosFem");
        modalCard2Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal2BlusaFem = document.querySelector(".js-btnFechar-card2-calcadosFem");
    btnFecharModal2BlusaFem.addEventListener("click", () => {
        const modalCard2Fem = document.querySelector(".js-modal-card2-calcadosFem");
        modalCard2Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}

const modalCalcadosFemCard3 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card3-calcados");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card3-calcados");
            imgGra.src = img.src;
        });
    });

    const detalhesCard3Fem = document.querySelector(".js-card3-calcadoFem");
    detalhesCard3Fem.addEventListener("click", () => {
        const modalCard3Fem = document.querySelector(".js-modal-card3-calcadosFem");
        modalCard3Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal3BlusaFem = document.querySelector(".js-btnFechar-card3-calcadosFem");
    btnFecharModal3BlusaFem.addEventListener("click", () => {
        const modalCard3Fem = document.querySelector(".js-modal-card3-calcadosFem");
        modalCard3Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}

const modalCalcadosFemCard4 = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card4-calcados");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card4-calcados");
            imgGra.src = img.src;
        });
    });

    const detalhesCard4Fem = document.querySelector(".js-card4-calcadoFem");
    detalhesCard4Fem.addEventListener("click", () => {
        const modalCard4Fem = document.querySelector(".js-modal-card4-calcadosFem");
        modalCard4Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal4BlusaFem = document.querySelector(".js-btnFechar-card4-calcadosFem");
    btnFecharModal4BlusaFem.addEventListener("click", () => {
        const modalCard4Fem = document.querySelector(".js-modal-card4-calcadosFem");
        modalCard4Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    })
}




modalCalcadosFemCard1();
modalCalcadosFemCard2();
modalCalcadosFemCard3();
modalCalcadosFemCard4();