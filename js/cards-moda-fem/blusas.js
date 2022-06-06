// MENU MODA FEMININA // 

const navegacaoMenuCardsFem = () => {

    const menuModaLink = document.querySelectorAll(".menu__moda__link");
    const modaConteudo = document.querySelectorAll(".js-moda-fem");
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

navegacaoMenuCardsFem();



// CARDS MODA FEMININA - MODAL BLUSAS  // 
const modalCard1BlusasFem = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card1]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card1]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector("[data-card1-btn-blusas]");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation();
        const modalBox1 = document.querySelector("[data-modal-card1-blusas-fem]");
        modalBox1.classList.add("show"); 
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card1-blusas-fem]")
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation();
        const modalBox2 = document.querySelector("[data-modal-card1-blusas-fem]");
        modalBox2.classList.remove("show");
    });

    
}

const modalCard2BlusasFem = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card2]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card2]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard2 = document.querySelector("[data-card2-btn-blusas]");
    detalhesCard2.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector("[data-modal-card2-blusas-fem]");
        modalBox2.classList.add("show");
        
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card2-blusas-fem]")
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector("[data-modal-card2-blusas-fem]");
        modalBox2.classList.remove("show");
    });
}

const modalCard3BlusasFem = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card3]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card3]");
            imgGrande.src = img.src;
        })
    });

    const detalhesCard3 = document.querySelector("[data-card3-btn-blusas]");
    detalhesCard3.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector("[data-modal-card3-blusas-fem]");
        modalBox3.classList.add("show");
        
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card3-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox3 = document.querySelector("[data-modal-card3-blusas-fem]");
        modalBox3.classList.remove("show");
    });
}

const modalCard4BlusasFem = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card4]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card4]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard4 = document.querySelector("[data-card4-btn-blusas]");
    detalhesCard4.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector("[data-modal-card4-blusas-fem]");
        modalBox4.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card4-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox4 = document.querySelector("[data-modal-card4-blusas-fem]");
        modalBox4.classList.remove("show");
    });
}

const modalCard5BlusasFem = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card5]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card5]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard5 = document.querySelector("[data-card5-btn-blusas]");
    detalhesCard5.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox5 = document.querySelector("[data-modal-card5-blusas-fem]");
        modalBox5.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card5-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox5 = document.querySelector("[data-modal-card5-blusas-fem]");
        modalBox5.classList.remove("show");
    });
}

const modalCard6BlusasFem = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card6]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card6]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard6 = document.querySelector("[data-card6-btn-blusas]");
    detalhesCard6.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox6 = document.querySelector("[data-modal-card6-blusas-fem]");
        modalBox6.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card6-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox6 = document.querySelector("[data-modal-card6-blusas-fem]");
        modalBox6.classList.remove("show");
    });
}

const modalCard7BlusasFem = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card7]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card7]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard7 = document.querySelector("[data-card7-btn-blusas]");
    detalhesCard7.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox7 = document.querySelector("[data-modal-card7-blusas-fem]");
        modalBox7.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card7-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox7 = document.querySelector("[data-modal-card7-blusas-fem]");
        modalBox7.classList.remove("show");
    });
}

const modalCard8BlusasFem = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card8]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card8]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard8 = document.querySelector("[data-card8-btn-blusas]");
    detalhesCard8.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox8 = document.querySelector("[data-modal-card8-blusas-fem]");
        modalBox8.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card8-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox8 = document.querySelector("[data-modal-card8-blusas-fem]");
        modalBox8.classList.remove("show");
    });
}

const modalCard9BlusasFem = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card9]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card9]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard9 = document.querySelector("[data-card9-btn-blusas]");
    detalhesCard9.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox9 = document.querySelector("[data-modal-card9-blusas-fem]");
        modalBox9.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card9-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox9 = document.querySelector("[data-modal-card9-blusas-fem]");
        modalBox9.classList.remove("show");
    });
}

const modalCard10BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card10]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card10]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard10 = document.querySelector("[data-card10-btn-blusas]");
    detalhesCard10.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox10 = document.querySelector("[data-modal-card10-blusas-fem]");
        modalBox10.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card10-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox10 = document.querySelector("[data-modal-card10-blusas-fem]");
        modalBox10.classList.remove("show");
    });
}

const modalCard11BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card11]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card11]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard11 = document.querySelector("[data-card11-btn-blusas]");
    detalhesCard11.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox11 = document.querySelector("[data-modal-card11-blusas-fem]");
        modalBox11.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card11-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox11 = document.querySelector("[data-modal-card11-blusas-fem]");
        modalBox11.classList.remove("show");
    });
}

const modalCard12BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card12]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card12]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard12 = document.querySelector("[data-card12-btn-blusas]");
    detalhesCard12.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox12 = document.querySelector("[data-modal-card12-blusas-fem]");
        modalBox12.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card12-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox12 = document.querySelector("[data-modal-card12-blusas-fem]");
        modalBox12.classList.remove("show");
    });
}

const modalCard13BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card13]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card13]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard13 = document.querySelector("[data-card13-btn-blusas]");
    detalhesCard13.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox13 = document.querySelector("[data-modal-card13-blusas-fem]");
        modalBox13.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card13-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox13 = document.querySelector("[data-modal-card13-blusas-fem]");
        modalBox13.classList.remove("show");
    });
}

const modalCard14BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card14]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card14]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard14 = document.querySelector("[data-card14-btn-blusas]");
    detalhesCard14.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox14 = document.querySelector("[data-modal-card14-blusas-fem]");
        modalBox14.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card14-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox14 = document.querySelector("[data-modal-card14-blusas-fem]");
        modalBox14.classList.remove("show");
    });
}

const modalCard15BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card15]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card15]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard15 = document.querySelector("[data-card15-btn-blusas]");
    detalhesCard15.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox15 = document.querySelector("[data-modal-card15-blusas-fem]");
        modalBox15.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card15-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox15 = document.querySelector("[data-modal-card15-blusas-fem]");
        modalBox15.classList.remove("show");
    });
}

const modalCard16BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card16]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card16]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard16 = document.querySelector("[data-card16-btn-blusas]");
    detalhesCard16.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox16 = document.querySelector("[data-modal-card16-blusas-fem]");
        modalBox16.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card16-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox16 = document.querySelector("[data-modal-card16-blusas-fem]");
        modalBox16.classList.remove("show");
    });
}

const modalCard17BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card17]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card17]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard17 = document.querySelector("[data-card17-btn-blusas]");
    detalhesCard17.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox17 = document.querySelector("[data-modal-card17-blusas-fem]");
        modalBox17.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card17-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox17 = document.querySelector("[data-modal-card17-blusas-fem]");
        modalBox17.classList.remove("show");
    });
}

const modalCard18BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card18]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card18]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard18 = document.querySelector("[data-card18-btn-blusas]");
    detalhesCard18.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox18 = document.querySelector("[data-modal-card18-blusas-fem]");
        modalBox18.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card18-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox18 = document.querySelector("[data-modal-card18-blusas-fem]");
        modalBox18.classList.remove("show");
    });
}

const modalCard19BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card19]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card19]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard19 = document.querySelector("[data-card19-btn-blusas]");
    detalhesCard19.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox19 = document.querySelector("[data-modal-card19-blusas-fem]");
        modalBox19.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card19-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox19 = document.querySelector("[data-modal-card19-blusas-fem]");
        modalBox19.classList.remove("show");
    });
}

const modalCard20BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card20]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card20]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard20 = document.querySelector("[data-card20-btn-blusas]");
    detalhesCard20.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox20 = document.querySelector("[data-modal-card20-blusas-fem]");
        modalBox20.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card20-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox20 = document.querySelector("[data-modal-card20-blusas-fem]");
        modalBox20.classList.remove("show");
    });
}

const modalCard21BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card21]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card21]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard21 = document.querySelector("[data-card21-btn-blusas]");
    detalhesCard21.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox21 = document.querySelector("[data-modal-card21-blusas-fem]");
        modalBox21.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card21-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox21 = document.querySelector("[data-modal-card21-blusas-fem]");
        modalBox21.classList.remove("show");
    });
}

const modalCard22BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card22]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card22]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard22 = document.querySelector("[data-card22-btn-blusas]");
    detalhesCard22.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox22 = document.querySelector("[data-modal-card22-blusas-fem]");
        modalBox22.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card22-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox22 = document.querySelector("[data-modal-card22-blusas-fem]");
        modalBox22.classList.remove("show");
    });
}

const modalCard23BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card23]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card23]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard23 = document.querySelector("[data-card23-btn-blusas]");
    detalhesCard23.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox23 = document.querySelector("[data-modal-card23-blusas-fem]");
        modalBox23.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card23-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox23 = document.querySelector("[data-modal-card23-blusas-fem]");
        modalBox23.classList.remove("show");
    });
}

const modalCard24BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card24]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card24]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard24 = document.querySelector("[data-card24-btn-blusas]");
    detalhesCard24.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox24 = document.querySelector("[data-modal-card24-blusas-fem]");
        modalBox24.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card24-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox24 = document.querySelector("[data-modal-card24-blusas-fem]");
        modalBox24.classList.remove("show");
    });
}

const modalCard25BlusasFem  = () => {
    const imgPequenas = document.querySelectorAll("[data-modal-imgP-blusas-card25]");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector("[data-modal-imgG-blusas-card25]");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard25 = document.querySelector("[data-card25-btn-blusas]");
    detalhesCard25.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox25 = document.querySelector("[data-modal-card25-blusas-fem]");
        modalBox25.classList.add("show");
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card25-blusas-fem]");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox25 = document.querySelector("[data-modal-card25-blusas-fem]");
        modalBox25.classList.remove("show");
    });
}

modalCard1BlusasFem();
modalCard2BlusasFem();
modalCard3BlusasFem();
modalCard4BlusasFem();
modalCard5BlusasFem();
modalCard6BlusasFem();
modalCard7BlusasFem();
modalCard8BlusasFem();
modalCard9BlusasFem();
modalCard10BlusasFem();
modalCard11BlusasFem();
modalCard12BlusasFem();
modalCard13BlusasFem();
modalCard14BlusasFem();
modalCard15BlusasFem();
modalCard16BlusasFem();
modalCard17BlusasFem();
modalCard18BlusasFem();
modalCard19BlusasFem();
modalCard20BlusasFem();
modalCard21BlusasFem();
modalCard22BlusasFem();
modalCard23BlusasFem();
modalCard24BlusasFem();
modalCard25BlusasFem();









    

    
    




