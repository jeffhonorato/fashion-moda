// CARDS MODA FEMININA - CALÇAS // 
const modalCard1CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card1");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card1");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector(".js-btn1-detalhes-calca");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard1 = document.querySelector(".js-modal__card1__calca");
        modalBoxCard1.classList.add("show"); 
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card1-calca");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBoxCard1 = document.querySelector(".js-modal__card1__calca");
        modalBoxCard1.classList.remove("show");
        
    });
   
    
}

const modalCard2CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card2");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card2");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard2 = document.querySelector(".js-btn2-detalhes-calca");
    detalhesCard2.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal__card2__calca");
        modalBox2.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card2-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox2 = document.querySelector(".js-modal__card2__calca");
        modalBox2.classList.remove("show");
    });

    
}

const modalCard3CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card3");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card3");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard3 = document.querySelector(".js-btn3-detalhes-calca");
    detalhesCard3.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector(".js-modal__card3__calca");
        modalBox3.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card3-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox3 = document.querySelector(".js-modal__card3__calca");
        modalBox3.classList.remove("show");
    });

    
}

const modalCard4CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card4");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card4");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard4 = document.querySelector(".js-btn4-detalhes-calca");
    detalhesCard4.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector(".js-modal__card4__calca");
        modalBox4.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card4-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox4 = document.querySelector(".js-modal__card4__calca");
        modalBox4.classList.remove("show");
    });

    
}

const modalCard5CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card5");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card5");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard5 = document.querySelector(".js-btn5-detalhes-calca");
    detalhesCard5.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox5 = document.querySelector(".js-modal__card5__calca");
        modalBox5.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card5-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox5 = document.querySelector(".js-modal__card5__calca");
        modalBox5.classList.remove("show");
    });

    
}

const modalCard6CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card6");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card6");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard6 = document.querySelector(".js-btn6-detalhes-calca");
    detalhesCard6.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox6 = document.querySelector(".js-modal__card6__calca");
        modalBox6.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card6-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox6 = document.querySelector(".js-modal__card6__calca");
        modalBox6.classList.remove("show");
    });

    
}

const modalCard7CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card7");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card7");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard7 = document.querySelector(".js-btn7-detalhes-calca");
    detalhesCard7.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox7 = document.querySelector(".js-modal__card7__calca");
        modalBox7.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card7-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox7 = document.querySelector(".js-modal__card7__calca");
        modalBox7.classList.remove("show");
    });

    
}

const modalCard8CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card8");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card8");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard8 = document.querySelector(".js-btn8-detalhes-calca");
    detalhesCard8.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox8 = document.querySelector(".js-modal__card8__calca");
        modalBox8.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card8-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox8 = document.querySelector(".js-modal__card8__calca");
        modalBox8.classList.remove("show");
    });

    
}

const modalCard9CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card9");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card9");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard9 = document.querySelector(".js-btn9-detalhes-calca");
    detalhesCard9.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox9 = document.querySelector(".js-modal__card9__calca");
        modalBox9.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card9-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox9 = document.querySelector(".js-modal__card9__calca");
        modalBox9.classList.remove("show");
    });

    
}

const modalCard10CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card10");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card10");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard10 = document.querySelector(".js-btn10-detalhes-calca");
    detalhesCard10.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox10 = document.querySelector(".js-modal__card10__calca");
        modalBox10.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card10-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox10 = document.querySelector(".js-modal__card10__calca");
        modalBox10.classList.remove("show");
    });

    
}

const modalCard11CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card11");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card11");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard11 = document.querySelector(".js-btn11-detalhes-calca");
    detalhesCard11.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox11 = document.querySelector(".js-modal__card11__calca");
        modalBox11.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card11-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox11 = document.querySelector(".js-modal__card11__calca");
        modalBox11.classList.remove("show");
    });

    
}

const modalCard12CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card12");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card12");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard12 = document.querySelector(".js-btn12-detalhes-calca");
    detalhesCard12.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox12 = document.querySelector(".js-modal__card12__calca");
        modalBox12.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card12-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox12 = document.querySelector(".js-modal__card12__calca");
        modalBox12.classList.remove("show");
    });

    
}

const modalCard13CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card13");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card13");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard13 = document.querySelector(".js-btn13-detalhes-calca");
    detalhesCard13.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox13 = document.querySelector(".js-modal__card13__calca");
        modalBox13.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card13-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox13 = document.querySelector(".js-modal__card13__calca");
        modalBox13.classList.remove("show");
    });

    
}

const modalCard14CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card14");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card14");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard14 = document.querySelector(".js-btn14-detalhes-calca");
    detalhesCard14.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox14 = document.querySelector(".js-modal__card14__calca");
        modalBox14.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card14-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox14 = document.querySelector(".js-modal__card14__calca");
        modalBox14.classList.remove("show");
    });

    
}

const modalCard15CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card15");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card15");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard15 = document.querySelector(".js-btn15-detalhes-calca");
    detalhesCard15.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox15 = document.querySelector(".js-modal__card15__calca");
        modalBox15.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card15-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox15 = document.querySelector(".js-modal__card15__calca");
        modalBox15.classList.remove("show");
    });

    
}

const modalCard16CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card16");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card16");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard16 = document.querySelector(".js-btn16-detalhes-calca");
    detalhesCard16.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox16 = document.querySelector(".js-modal__card16__calca");
        modalBox16.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card16-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox16 = document.querySelector(".js-modal__card16__calca");
        modalBox16.classList.remove("show");
    });

    
}

const modalCard17CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card17");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card17");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard17 = document.querySelector(".js-btn17-detalhes-calca");
    detalhesCard17.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox17 = document.querySelector(".js-modal__card17__calca");
        modalBox17.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card17-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox17 = document.querySelector(".js-modal__card17__calca");
        modalBox17.classList.remove("show");
    });

    
}

const modalCard18CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card18");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card18");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard18 = document.querySelector(".js-btn18-detalhes-calca");
    detalhesCard18.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox18 = document.querySelector(".js-modal__card18__calca");
        modalBox18.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card18-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox18 = document.querySelector(".js-modal__card18__calca");
        modalBox18.classList.remove("show");
    });

    
}

const modalCard19CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card19");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card19");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard19 = document.querySelector(".js-btn19-detalhes-calca");
    detalhesCard19.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox19 = document.querySelector(".js-modal__card19__calca");
        modalBox19.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card19-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox19 = document.querySelector(".js-modal__card19__calca");
        modalBox19.classList.remove("show");
    });

    
}

const modalCard20CalcasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-calca-card20");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-calca-card20");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard20 = document.querySelector(".js-btn20-detalhes-calca");
    detalhesCard20.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox20 = document.querySelector(".js-modal__card20__calca");
        modalBox20.classList.add("show"); 
        
        
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card20-calca");
    btnFechar.addEventListener("click", () => {
        const modalBox20 = document.querySelector(".js-modal__card20__calca");
        modalBox20.classList.remove("show");
    });

    
}


modalCard1CalcasFem();
modalCard2CalcasFem();
modalCard3CalcasFem();
modalCard4CalcasFem();
modalCard5CalcasFem();
modalCard6CalcasFem();
modalCard7CalcasFem();
modalCard8CalcasFem();
modalCard9CalcasFem();
modalCard10CalcasFem();
modalCard11CalcasFem();
modalCard12CalcasFem();
modalCard13CalcasFem();
modalCard14CalcasFem();
modalCard15CalcasFem();
modalCard16CalcasFem();
modalCard17CalcasFem();
modalCard18CalcasFem();
modalCard19CalcasFem();
modalCard20CalcasFem();
