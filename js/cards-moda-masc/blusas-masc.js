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
modalBlusasMascCard1 = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-blusasMasc-card1");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-blusasMasc-card1");
            imgGrande.src = img.src;
        });
    });

    const detalhesCard1 = document.querySelector(".js-blusasMasc-card1");
    detalhesCard1.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal-blusasMasc-card1");
        modalBox1.classList.add("open");
        // const menuMobile = document.querySelector(".menu__mobile")
        // menuMobile.style.display = "none";
    });

    const btnFechar = document.querySelector(".js-btnFechar--blusasMasc-card1");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox1 = document.querySelector(".js-modal-blusasMasc-card1");
        modalBox1.classList.remove("open");
        // const menuMobile = document.querySelector(".menu__mobile")
        // menuMobile.style.display = "block";
    });
} 


modalBlusasMascCard2 = () => {
    const imgPequenas = document.querySelectorAll(".js-imgPeq-blusasMasc-card2");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-imgGra-blusasMasc-card2");
            imgGrande.src = img.src;
        })2
    });

    const detalhesCard2 = document.querySelector(".js-blusasMasc-card2");
    detalhesCard2.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal-blusasMasc-card2");
        modalBox2.classList.add("open");
        // const menuMobile = document.querySelector(".menu__mobile")
        // menuMobile.style.display = "none"; 
    });

    const btnFechar = document.querySelector(".js-btnFechar--blusasMasc-card2");
    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation()
        const modalBox2 = document.querySelector(".js-modal-blusasMasc-card2");
        modalBox2.classList.remove("open");
        // const menuMobile = document.querySelector(".menu__mobile")
        // menuMobile.style.display = "block";
    });
}  



modalBlusasMascCard1();
modalBlusasMascCard2();
