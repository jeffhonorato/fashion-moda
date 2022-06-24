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
        const modalBox1 = document.querySelector(".js-modal-blusas");
        modalBox1.classList.add("show"); 
    });

    const btnFechar = document.querySelector("[data-btn-fechar-card1-blusas-fem]")
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation();
        const modalBox2 = document.querySelector("..js-modal-blusas");
        modalBox2.classList.remove("show");
    });
   
    
}



modalCard1BlusasFem();










    

    
    




