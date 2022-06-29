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
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal1BlusaFem = document.querySelector(".js-btnFechar-card1-blusasFem");
    btnFecharModal1BlusaFem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-blusasFem");
        modalCard1Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

const boxCard2blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card2-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card2-blusa");
            imgGra.src = img.src;
            console.log(imgPeq)
        });
    });

    const detalhesCard2Fem = document.querySelector(".js-card2-blusaFem");
    detalhesCard2Fem.addEventListener("click", () => {
        const modalCard2Fem = document.querySelector(".js-modal-card2-blusasFem");
        modalCard2Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal2BlusaFem = document.querySelector(".js-btnFechar-card2-blusasFem");
    btnFecharModal2BlusaFem.addEventListener("click", () => {
        const modalCard2Fem = document.querySelector(".js-modal-card2-blusasFem");
        modalCard2Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}


boxCard1blusasFem();
boxCard2blusasFem();









    

    
    




