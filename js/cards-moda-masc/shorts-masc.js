// CARDS MODA MASCULINA - MODAL SHORTS  // 

modalShortMascCard1 = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-shortsMasc-card1");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-shortsMasc-card1");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector(".js-shortMasc-card1");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal-shortsMasc-card1");
        modalBox1.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "none";
    });

    const btnFechar = document.querySelector(".js-btnFechar--shortsMasc-card1");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal-shortsMasc-card1");
        modalBox1.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
    });
}

modalShortMascCard2 = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-shortsMasc-card2");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-shortsMasc-card2");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard2 = document.querySelector(".js-shortMasc-card2");
    detalhesCard2.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal-shortsMasc-card2");
        modalBox2.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "none";
    });

    const btnFechar = document.querySelector(".js-btnFechar--shortsMasc-card2");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal-shortsMasc-card2");
        modalBox2.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
    });
}

modalShortMascCard3 = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-shortsMasc-card3");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-shortsMasc-card3");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard3 = document.querySelector(".js-shortMasc-card3");
    detalhesCard3.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector(".js-modal-shortsMasc-card3");
        modalBox3.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "none";
    });

    const btnFechar = document.querySelector(".js-btnFechar--shortsMasc-card3");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector(".js-modal-shortsMasc-card3");
        modalBox3.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
    });
}

modalShortMascCard4 = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-shortsMasc-card4");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-shortsMasc-card4");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard4 = document.querySelector(".js-shortMasc-card4");
    detalhesCard4.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector(".js-modal-shortsMasc-card4");
        modalBox4.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "none";
    });

    const btnFechar = document.querySelector(".js-btnFechar--shortsMasc-card4");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector(".js-modal-shortsMasc-card4");
        modalBox4.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
    });
}






modalShortMascCard1();
modalShortMascCard2();
modalShortMascCard3();
modalShortMascCard4();