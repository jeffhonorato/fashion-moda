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





modalShortMascCard1();