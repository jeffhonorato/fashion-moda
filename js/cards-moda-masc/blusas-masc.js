// MENU MODA MASCULINA // 
const navegacaoMenuCardsMasc = () => {

    const menuModaLink = document.querySelectorAll(".menu__moda__link-masc");
    const modaConteudo = document.querySelectorAll(".js-moda-masc");
    modaConteudo[0].classList.add("ativo");

    
    function activeMenuTab (index) {
        modaConteudo.forEach((section) => {
            section.classList.remove("ativo");
        });
    
        modaConteudo[index].classList.add("ativo");
    };
    
    
    menuModaLink.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
            activeMenuTab(index);
        });
    });

    
}

navegacaoMenuCardsMasc();

// CARDS MODA MASCULINA - MODAL BLUSAS  // 
modalCard1BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card1");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card1");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector(".js-btn1-detalhes-blusasMasc");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal__card1__blusasMasc");
        modalBox1.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card1-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal__card1__blusasMasc");
        modalBox1.classList.remove("show");
    });
}  

modalCard2BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card2");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card2");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard2 = document.querySelector(".js-btn2-detalhes-blusasMasc");
    detalhesCard2.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal__card2__blusasMasc");
        modalBox2.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card2-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal__card2__blusasMasc");
        modalBox2.classList.remove("show");
    });
} 

modalCard3BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card3");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card3");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard3 = document.querySelector(".js-btn3-detalhes-blusasMasc");
    detalhesCard3.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector(".js-modal__card3__blusasMasc");
        modalBox3.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card3-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector(".js-modal__card3__blusasMasc");
        modalBox3.classList.remove("show");
    });
} 

modalCard4BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card4");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card4");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard4 = document.querySelector(".js-btn4-detalhes-blusasMasc");
    detalhesCard4.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector(".js-modal__card4__blusasMasc");
        modalBox4.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card4-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector(".js-modal__card4__blusasMasc");
        modalBox4.classList.remove("show");
    });
} 

modalCard5BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card5");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card5");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard5 = document.querySelector(".js-btn5-detalhes-blusasMasc");
    detalhesCard5.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox5 = document.querySelector(".js-modal__card5__blusasMasc");
        modalBox5.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card5-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox5 = document.querySelector(".js-modal__card5__blusasMasc");
        modalBox5.classList.remove("show");
    });
} 

modalCard6BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card6");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card6");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard6 = document.querySelector(".js-btn6-detalhes-blusasMasc");
    detalhesCard6.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox6 = document.querySelector(".js-modal__card6__blusasMasc");
        modalBox6.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card6-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox6 = document.querySelector(".js-modal__card6__blusasMasc");
        modalBox6.classList.remove("show");
    });
} 

modalCard7BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card7");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card7");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard7 = document.querySelector(".js-btn7-detalhes-blusasMasc");
    detalhesCard7.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox7 = document.querySelector(".js-modal__card7__blusasMasc");
        modalBox7.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card7-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox7 = document.querySelector(".js-modal__card7__blusasMasc");
        modalBox7.classList.remove("show");
    });
} 

modalCard8BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card8");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card8");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard8 = document.querySelector(".js-btn8-detalhes-blusasMasc");
    detalhesCard8.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox8 = document.querySelector(".js-modal__card8__blusasMasc");
        modalBox8.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card8-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox8 = document.querySelector(".js-modal__card8__blusasMasc");
        modalBox8.classList.remove("show");
    });
} 

modalCard9BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card9");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card9");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard9 = document.querySelector(".js-btn9-detalhes-blusasMasc");
    detalhesCard9.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox9 = document.querySelector(".js-modal__card9__blusasMasc");
        modalBox9.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card9-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox9 = document.querySelector(".js-modal__card9__blusasMasc");
        modalBox9.classList.remove("show");
    });
} 

modalCard10BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card10");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card10");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard10 = document.querySelector(".js-btn10-detalhes-blusasMasc");
    detalhesCard10.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox10 = document.querySelector(".js-modal__card10__blusasMasc");
        modalBox10.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card10-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox10 = document.querySelector(".js-modal__card10__blusasMasc");
        modalBox10.classList.remove("show");
    });
} 

modalCard11BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card11");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card11");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard11 = document.querySelector(".js-btn11-detalhes-blusasMasc");
    detalhesCard11.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox11 = document.querySelector(".js-modal__card11__blusasMasc");
        modalBox11.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card11-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox11 = document.querySelector(".js-modal__card11__blusasMasc");
        modalBox11.classList.remove("show");
    });
} 

modalCard12BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card12");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card12");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard12 = document.querySelector(".js-btn12-detalhes-blusasMasc");
    detalhesCard12.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox12 = document.querySelector(".js-modal__card12__blusasMasc");
        modalBox12.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card12-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox12 = document.querySelector(".js-modal__card12__blusasMasc");
        modalBox12.classList.remove("show");
    });
} 

modalCard13BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card13");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card13");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard13 = document.querySelector(".js-btn13-detalhes-blusasMasc");
    detalhesCard13.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox13 = document.querySelector(".js-modal__card13__blusasMasc");
        modalBox13.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card13-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox13 = document.querySelector(".js-modal__card13__blusasMasc");
        modalBox13.classList.remove("show");
    });
}

modalCard14BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card14");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card14");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard14 = document.querySelector(".js-btn14-detalhes-blusasMasc");
    detalhesCard14.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox14 = document.querySelector(".js-modal__card14__blusasMasc");
        modalBox14.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card14-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox14 = document.querySelector(".js-modal__card14__blusasMasc");
        modalBox14.classList.remove("show");
    });
}

modalCard15BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card15");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card15");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard15 = document.querySelector(".js-btn15-detalhes-blusasMasc");
    detalhesCard15.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox15 = document.querySelector(".js-modal__card15__blusasMasc");
        modalBox15.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card15-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox15 = document.querySelector(".js-modal__card15__blusasMasc");
        modalBox15.classList.remove("show");
    });
}

modalCard16BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card16");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card16");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard16 = document.querySelector(".js-btn16-detalhes-blusasMasc");
    detalhesCard16.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox16 = document.querySelector(".js-modal__card16__blusasMasc");
        modalBox16.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card16-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox16 = document.querySelector(".js-modal__card16__blusasMasc");
        modalBox16.classList.remove("show");
    });
}

modalCard17BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card17");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card17");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard17 = document.querySelector(".js-btn17-detalhes-blusasMasc");
    detalhesCard17.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox17 = document.querySelector(".js-modal__card17__blusasMasc");
        modalBox17.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card17-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox17 = document.querySelector(".js-modal__card17__blusasMasc");
        modalBox17.classList.remove("show");
    });
}

modalCard18BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card18");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card18");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard18 = document.querySelector(".js-btn18-detalhes-blusasMasc");
    detalhesCard18.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox18 = document.querySelector(".js-modal__card18__blusasMasc");
        modalBox18.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card18-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox18 = document.querySelector(".js-modal__card18__blusasMasc");
        modalBox18.classList.remove("show");
    });
}

modalCard19BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card19");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card19");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard19 = document.querySelector(".js-btn19-detalhes-blusasMasc");
    detalhesCard19.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox19 = document.querySelector(".js-modal__card19__blusasMasc");
        modalBox19.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card19-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox19 = document.querySelector(".js-modal__card19__blusasMasc");
        modalBox19.classList.remove("show");
    });
}

modalCard20BlusasMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusasMasc-card20");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusasMasc-card20");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard20 = document.querySelector(".js-btn20-detalhes-blusasMasc");
    detalhesCard20.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox20 = document.querySelector(".js-modal__card20__blusasMasc");
        modalBox20.classList.add("show");
    });

    const btnFechar = document.querySelector(".js-btn-fechar-card20-blusasMasc");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox20 = document.querySelector(".js-modal__card20__blusasMasc");
        modalBox20.classList.remove("show");
    });
}




modalCard1BlusasMasc();
modalCard2BlusasMasc();
modalCard3BlusasMasc();
modalCard4BlusasMasc();
modalCard5BlusasMasc();
modalCard6BlusasMasc();
modalCard7BlusasMasc();
modalCard8BlusasMasc();
modalCard9BlusasMasc();
modalCard10BlusasMasc();
modalCard11BlusasMasc();
modalCard12BlusasMasc();
modalCard13BlusasMasc();
modalCard14BlusasMasc();
modalCard15BlusasMasc();
modalCard16BlusasMasc();
modalCard17BlusasMasc();
modalCard18BlusasMasc();
modalCard19BlusasMasc();
modalCard20BlusasMasc();