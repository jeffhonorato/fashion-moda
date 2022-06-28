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

// MODAL BLUSAS FEM 
const boxCard1blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card1-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card1-blusa");
            imgGra.src = img.src;
            console.log(imgPeq)
        });
    });

    const detalhesCard1Fem = document.querySelector(".js-card1-blusaFem");
    detalhesCard1Fem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-blusasFem");
        modalCard1Fem.classList.add("open");
    });

    const btnFecharModal1BlusaFem = document.querySelector(".js-btnFechar-card1-blusasFem");
    btnFecharModal1BlusaFem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-blusasFem");
        modalCard1Fem.classList.remove("open");
    })
    
}


boxCard1blusasFem();









    

    
    




