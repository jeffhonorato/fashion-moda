// MUDAR CARDS - FEMININO / MASCULINO // 
const tabMenuPro = document.querySelectorAll(".js-btn-menu");
const tabConteudoPro = document.querySelectorAll(".js-promocao");
tabConteudoPro[0].classList.add("selected");


function activeTab(index) {
    tabConteudoPro.forEach((section) => {
        section.classList.remove("selected");
    });

    tabConteudoPro[index].classList.add("selected");
}

tabMenuPro.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
        activeTab(index);
    });
});





// PROMOÇÔES CARDS FEMININO //
const boxFemCard01 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card1"); 
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card1");
            imgGrande.src = img.src;
        });
    });    
}

const boxFemCard02 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card2");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card2");
            imgGrande.src = img.src;
        });
    });
}

const boxFemCard03 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card3");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card3");
            imgGrande.src = img.src;
        });
    });
    
}

const boxFemCard04 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card4");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card4");
            imgGrande.src = img.src;
        });
    });
}

const boxFemCard05 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card5");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card5");
            imgGrande.src = img.src;
        });
    })
    
}

const boxFemCard06 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card6");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card6");
            imgGrande.src = img.src;
        });
    });
    
}

const boxFemCard07 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card7");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card7");
            imgGrande.src = img.src;
        });
    });
}

const boxFemCard08 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card8"); 

    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card8");
            imgGrande.src = img.src;
        });
    });
}

const boxFemCard09 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card9");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card9 ");
            imgGrande.src = img.src;
        });
    });
}

const boxFemCard10 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card10");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card10");
            imgGrande.src = img.src;
        })
    });
}

const boxFemCard11 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card11");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card11");
            imgGrande.src = img.src;
        }); 
    });
}

const boxFemCard12 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card12");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card12");
            imgGrande.src = img.src;
        });
    }); 
}

const boxFemCard13 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card13");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card13");
            imgGrande.src = img.src;
        });
    });
}

const boxFemCard14 = () => {
    const imgPequenas = document.querySelectorAll(".img__peq__card14");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__gra__card14");
            imgGrande.src = img.src;
        })
    });
}

const boxFemCard15 = () => {
   const imgPequenas = document.querySelectorAll(".img__peq__card15");
   imgPequenas.forEach((img) => {
       img.addEventListener("click", () => {
        const imgGrande = document.querySelector(".img__gra__card15");
            imgGrande.src = img.src;
       });
   });
}

boxFemCard01();
boxFemCard02();
boxFemCard03();
boxFemCard04();
boxFemCard05();
boxFemCard06();
boxFemCard07();
boxFemCard08();
boxFemCard09();
boxFemCard10();
boxFemCard11();
boxFemCard12();
boxFemCard13();
boxFemCard14();
boxFemCard15();



// PROMOÇÔES CARDS MASCULINO //
const boxMascCard01 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card1");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card1");
            imgGrande.src = img.src;
        })
    });
}

const boxMascCard02 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card2");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card2");
            imgGrande.src = img.src;
        });
    });
}

const boxMascCard03 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card3");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card3");
            imgGrande.src = img.src;
        });
    });
    
}

const boxMascCard04 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card4");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card4");
            imgGrande.src = img.src;   
        });
    });
}

const boxMascCard05 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card5");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card5");
            imgGrande.src = img.src;
        });
    });
}

const boxMascCard06 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card6");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card6");
            imgGrande.src = img.src;
        });
    });

}

const boxMascCard07 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card7");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card7");
            imgGrande.src = img.src;
        });
    }); 
}

const boxMascCard08 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card8");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card8");
            imgGrande.src = img.src;
        });
    });
}

const boxMascCard09 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card9");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card9");
            imgGrande.src = img.src;
        });
    });
}

const boxMascCard10 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card10");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card10");
            imgGrande.src = img.src;
        });
    });
}

const boxMascCard11 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card11");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card11");
            imgGrande.src = img.src;
        });
    });
}

const boxMascCard12 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card12");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card12");
            imgGrande.src = img.src;
        });
    });
}

const boxMascCard13 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card13");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card13");
            imgGrande.src = img.src;
        });
    });
}

const boxMascCard14 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card14");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card14");
            imgGrande.src = img.src;
        });
    });
}

const boxMascCard15 = () => {
    const imgPequenas = document.querySelectorAll(".img__peqM__card15");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".img__graM__card15");
            imgGrande.src = img.src;
        });
    });
}
 
boxMascCard01();
boxMascCard02();
boxMascCard03();
boxMascCard04();
boxMascCard05();
boxMascCard06();
boxMascCard07();
boxMascCard08();
boxMascCard09();
boxMascCard10();
boxMascCard11();
boxMascCard12();
boxMascCard13();
boxMascCard14();
boxMascCard15();



