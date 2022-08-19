// CARDS MODA MASCULINA - MODAL CALÇAS  // 

modalCalcaMascCard1 = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-calcaMasc-card1");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-calcaMasc-card1");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector(".js-calcaMasc-card1");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal-calcaMasc-card1");
        modalBox1.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "none";
    });

    const btnFechar = document.querySelector(".js-btnFechar--calcaMasc-card1");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal-calcaMasc-card1");
        modalBox1.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
    });
}

modalCalcaMascCard2 = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-calcaMasc-card2");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-calcaMasc-card2");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard2 = document.querySelector(".js-calcaMasc-card2");
    detalhesCard2.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal-calcaMasc-card2");
        modalBox2.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "none";
    });

    const btnFechar = document.querySelector(".js-btnFechar--calcaMasc-card2");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal-calcaMasc-card2");
        modalBox2.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
    });
}

modalCalcaMascCard3 = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-calcaMasc-card3");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-calcaMasc-card3");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard3 = document.querySelector(".js-calcaMasc-card3");
    detalhesCard3.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector(".js-modal-calcaMasc-card3");
        modalBox3.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "none";
    });

    const btnFechar = document.querySelector(".js-btnFechar--calcaMasc-card3");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector(".js-modal-calcaMasc-card3");
        modalBox3.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
    });
}

modalCalcaMascCard4 = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-calcaMasc-card4");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-calcaMasc-card4");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard4 = document.querySelector(".js-calcaMasc-card4");
    detalhesCard4.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector(".js-modal-calcaMasc-card4");
        modalBox4.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "none";
    });

    const btnFechar = document.querySelector(".js-btnFechar--calcaMasc-card4");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector(".js-modal-calcaMasc-card4");
        modalBox4.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
    });
}





modalCalcaMascCard1();
modalCalcaMascCard2();
modalCalcaMascCard3();
modalCalcaMascCard4();