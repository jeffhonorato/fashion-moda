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
        });
    });

    const detalhesCard1Fem = document.querySelector(".js-card1-blusaFem");
    detalhesCard1Fem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-blusasFem");
        modalCard1Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.add("ativo");
    });

    const btnFecharModal1BlusaFem = document.querySelector(".js-btnFechar-card1-blusasFem");
    btnFecharModal1BlusaFem.addEventListener("click", () => {
        const modalCard1Fem = document.querySelector(".js-modal-card1-blusasFem");
        modalCard1Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile");
        menuMobile.style.display = "block";
        const scrollBody = document.querySelector(".js-scroll");
        scrollBody.classList.remove("ativo");
    });

    
}

const boxCard2blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card2-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card2-blusa");
            imgGra.src = img.src;
            
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

const boxCard3blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card3-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card3-blusa");
            imgGra.src = img.src;
            
        });
    });

    const detalhesCard3Fem = document.querySelector(".js-card3-blusaFem");
    detalhesCard3Fem.addEventListener("click", () => {
        const modalCard3Fem = document.querySelector(".js-modal-card3-blusasFem");
        modalCard3Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal3BlusaFem = document.querySelector(".js-btnFechar-card3-blusasFem");
    btnFecharModal3BlusaFem.addEventListener("click", () => {
        const modalCard3Fem = document.querySelector(".js-modal-card3-blusasFem");
        modalCard3Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

const boxCard4blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card4-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card4-blusa");
            imgGra.src = img.src;
            
        });
    });

    const detalhesCard4Fem = document.querySelector(".js-card4-blusaFem");
    detalhesCard4Fem.addEventListener("click", () => {
        const modalCard4Fem = document.querySelector(".js-modal-card4-blusasFem");
        modalCard4Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal4BlusaFem = document.querySelector(".js-btnFechar-card4-blusasFem");
    btnFecharModal4BlusaFem.addEventListener("click", () => {
        const modalCard4Fem = document.querySelector(".js-modal-card4-blusasFem");
        modalCard4Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

const boxCard5blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card5-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card5-blusa");
            imgGra.src = img.src;
            
        });
    });

    const detalhesCard5Fem = document.querySelector(".js-card5-blusaFem");
    detalhesCard5Fem.addEventListener("click", () => {
        const modalCard5Fem = document.querySelector(".js-modal-card5-blusasFem");
        modalCard5Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal5BlusaFem = document.querySelector(".js-btnFechar-card5-blusasFem");
    btnFecharModal5BlusaFem.addEventListener("click", () => {
        const modalCard5Fem = document.querySelector(".js-modal-card5-blusasFem");
        modalCard5Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

const boxCard6blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card6-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card6-blusa");
            imgGra.src = img.src;
            
        });
    });

    const detalhesCard6Fem = document.querySelector(".js-card6-blusaFem");
    detalhesCard6Fem.addEventListener("click", () => {
        const modalCard6Fem = document.querySelector(".js-modal-card6-blusasFem");
        modalCard6Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal6BlusaFem = document.querySelector(".js-btnFechar-card6-blusasFem");
    btnFecharModal6BlusaFem.addEventListener("click", () => {
        const modalCard6Fem = document.querySelector(".js-modal-card6-blusasFem");
        modalCard6Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

const boxCard7blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card7-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card7-blusa");
            imgGra.src = img.src;
            
        });
    });

    const detalhesCard7Fem = document.querySelector(".js-card7-blusaFem");
    detalhesCard7Fem.addEventListener("click", () => {
        const modalCard7Fem = document.querySelector(".js-modal-card7-blusasFem");
        modalCard7Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal7BlusaFem = document.querySelector(".js-btnFechar-card7-blusasFem");
    btnFecharModal7BlusaFem.addEventListener("click", () => {
        const modalCard7Fem = document.querySelector(".js-modal-card7-blusasFem");
        modalCard7Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

const boxCard8blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card8-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card8-blusa");
            imgGra.src = img.src;
            
        });
    });

    const detalhesCard8Fem = document.querySelector(".js-card8-blusaFem");
    detalhesCard8Fem.addEventListener("click", () => {
        const modalCard8Fem = document.querySelector(".js-modal-card8-blusasFem");
        modalCard8Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal8BlusaFem = document.querySelector(".js-btnFechar-card8-blusasFem");
    btnFecharModal8BlusaFem.addEventListener("click", () => {
        const modalCard8Fem = document.querySelector(".js-modal-card8-blusasFem");
        modalCard8Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

const boxCard9blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card9-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card9-blusa");
            imgGra.src = img.src;
        });
    });

    const detalhesCard9Fem = document.querySelector(".js-card9-blusaFem");
    detalhesCard9Fem.addEventListener("click", () => {
        const modalCard9Fem = document.querySelector(".js-modal-card9-blusasFem");
        modalCard9Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal9BlusaFem = document.querySelector(".js-btnFechar-card9-blusasFem");
    btnFecharModal9BlusaFem.addEventListener("click", () => {
        const modalCard9Fem = document.querySelector(".js-modal-card9-blusasFem");
        modalCard9Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}

const boxCard10blusasFem = () => {
    const imgPeq = document.querySelectorAll(".js-imgPeq-card10-blusa");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card10-blusa");
            imgGra.src = img.src;
        });
    });

    const detalhesCard10Fem = document.querySelector(".js-card10-blusaFem");
    detalhesCard10Fem.addEventListener("click", () => {
        const modalCard10Fem = document.querySelector(".js-modal-card10-blusasFem");
        modalCard10Fem.classList.add("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "none"; 
    });

    const btnFecharModal10BlusaFem = document.querySelector(".js-btnFechar-card10-blusasFem");
    btnFecharModal10BlusaFem.addEventListener("click", () => {
        const modalCard10Fem = document.querySelector(".js-modal-card10-blusasFem");
        modalCard10Fem.classList.remove("open");
        const menuMobile = document.querySelector(".menu__mobile")
        menuMobile.style.display = "block";
    })
}


boxCard1blusasFem();
boxCard2blusasFem();
boxCard3blusasFem();
boxCard4blusasFem();
boxCard5blusasFem();
boxCard6blusasFem();
boxCard7blusasFem();
boxCard8blusasFem();
boxCard9blusasFem();
boxCard10blusasFem();

// DESATIVANDO SCROLL 
// const desativandoScroll = () => {

//     const btnDetalhes = document.querySelector(".js-btn-scroll-disable");
//     const scrollBody = document.querySelector(".js-scroll"); 
//     const btnFechar = document.querySelector(".js-btn-fechar-scroll");
    
//     btnDetalhes.addEventListener("click", () => {
//             scrollBody.classList.add("ativo");
//         });

//     btnFechar.addEventListener("click", () => {
//         scrollBody.classList.remove("ativo");
//     })
// }

// desativandoScroll();








    

    
    




