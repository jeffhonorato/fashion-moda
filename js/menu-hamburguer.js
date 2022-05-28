const menuHamburguer = document.querySelector(".menu__mobile");
const navItens = document.querySelector(".nav__itens");

menuHamburguer.addEventListener("click", () => {
    navItens.classList.toggle("ativo");
});