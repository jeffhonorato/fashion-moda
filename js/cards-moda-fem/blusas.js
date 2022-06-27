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











    

    
    




