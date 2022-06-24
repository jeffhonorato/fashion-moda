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
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusas-card1");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusas-card1");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector(".js-btn-card1-blusas");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation();
        const modalBlusasCard1 = document.querySelector(".js-modal-blusas-card1");
        modalBlusasCard1.classList.add("show"); 
       console.log(modalBlusasCard1)
    });

    const btnFechar = document.querySelector(".js-btnFechar-blusas-card1")
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation();
        const modalBlusasCard1 = document.querySelector(".js-modal-blusas-card1");
        modalBlusasCard1.classList.remove("show");
    });
   
    
}

const modalCard2BlusasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusas-card2");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusas-card2");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard2 = document.querySelector(".js-btn-card2-blusas");
    detalhesCard2.addEventListener("click", (e) => {
        e.stopPropagation();
        const modalBlusasCard2 = document.querySelector(".js-modal-blusas-card2");
        modalBlusasCard2.classList.add("show"); 
        console.log(modalBlusasCard2)
    });

    const btnFechar = document.querySelector(".js-btnFechar-blusas-card2")
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation();
        const modalBlusasCard2 = document.querySelector(".js-modal-blusas-card2");
        modalBlusasCard2.classList.remove("show"); 
    });
    
}

const modalCard3BlusasFem = () => {
    const imgPequenas = document.querySelectorAll(".js-modal-imgP-blusas-card3");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-modal-imgG-blusas-card3");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard3 = document.querySelector(".js-btn-card3-blusas");
    detalhesCard3.addEventListener("click", (e) => {
        e.stopPropagation();
        const modalBlusasCard3 = document.querySelector(".js-modal-blusas-card3");
        modalBlusasCard3.classList.add("show"); 
        console.log(modalBlusasCard3)
    });

    const btnFechar = document.querySelector(".js-btnFechar-blusas-card3")
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation();
        const modalBlusasCard3 = document.querySelector(".js-modal-blusas-card3");
        modalBlusasCard3.classList.remove("show"); 
        console.log(btnFechar)
    });
    
}



modalCard1BlusasFem();
modalCard2BlusasFem();
modalCard3BlusasFem();










    

    
    




