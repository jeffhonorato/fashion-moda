modalCard1CalcadosMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calcadoMasc-card1");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calcadoMasc-card1");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector(".js-btn1-detalhes-calcadoMasc");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal__card1__calcadoMasc");
        modalBox1.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card1-calcadosMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal__card1__calcadoMasc");
        modalBox1.classList.remove("show");
    });
} 

modalCard2CalcadosMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calcadoMasc-card2");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calcadoMasc-card2");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard2 = document.querySelector(".js-btn2-detalhes-calcadoMasc");
    detalhesCard2.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal__card2__calcadoMasc");
        modalBox2.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card2-calcadosMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal__card2__calcadoMasc");
        modalBox2.classList.remove("show");
    });
} 

modalCard3CalcadosMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calcadoMasc-card3");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calcadoMasc-card3");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard3 = document.querySelector(".js-btn3-detalhes-calcadoMasc");
    detalhesCard3.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector(".js-modal__card3__calcadoMasc");
        modalBox3.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card3-calcadosMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector(".js-modal__card3__calcadoMasc");
        modalBox3.classList.remove("show");
    });
}

modalCard4CalcadosMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calcadoMasc-card4");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calcadoMasc-card4");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard4 = document.querySelector(".js-btn4-detalhes-calcadoMasc");
    detalhesCard4.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector(".js-modal__card4__calcadoMasc");
        modalBox4.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card4-calcadosMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector(".js-modal__card4__calcadoMasc");
        modalBox4.classList.remove("show");
    });
}

modalCard5CalcadosMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calcadoMasc-card5");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calcadoMasc-card5");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard5 = document.querySelector(".js-btn5-detalhes-calcadoMasc");
    detalhesCard5.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox5 = document.querySelector(".js-modal__card5__calcadoMasc");
        modalBox5.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card5-calcadosMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox5 = document.querySelector(".js-modal__card5__calcadoMasc");
        modalBox5.classList.remove("show");
    });
}

modalCard6CalcadosMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calcadoMasc-card6");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calcadoMasc-card6");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard6 = document.querySelector(".js-btn6-detalhes-calcadoMasc");
    detalhesCard6.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox6 = document.querySelector(".js-modal__card6__calcadoMasc");
        modalBox6.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card6-calcadosMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox6 = document.querySelector(".js-modal__card6__calcadoMasc");
        modalBox6.classList.remove("show");
    });
}



modalCard1CalcadosMasc();
modalCard2CalcadosMasc();
modalCard3CalcadosMasc();
modalCard4CalcadosMasc();
modalCard5CalcadosMasc();
modalCard6CalcadosMasc();