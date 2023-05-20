let texte1 = document.querySelector(".container_1 #texte_1")
let texte2 = document.querySelector(".container_1 #texte_2")
let texte3 = document.querySelector(".container_1 #texte_3")
let sur_cote = document.querySelectorAll(".sur_cote .Texte")
let sur_cote_texte1 = document.querySelector(".sur_cote .Texte1")
let sur_cote_texte2 = document.querySelector(".sur_cote .Texte2")
let sur_cote_texte3 = document.querySelector(".sur_cote .Texte3")
let container_1 = document.querySelector("section .container_1")
let config_BV = document.querySelector("#config_BV")
let config_QUEUE = document.querySelector("#config_QUEUE")
let test_SOLU = document.querySelector("#test_SOLU")
let close_img = document.querySelector(".close_img")

function pour_texte_1_add() {
    container_1.classList.add("ArrierPlan");
    texte2.classList.add('dispa_texte')
    texte3.classList.add('dispa_texte')
    if (texte1.classList.contains("texte1") === true) {
        for (let i = 0; i < sur_cote.length; i++) {
            switch (sur_cote[i].id) {
                case 'texte1':
                    sur_cote_texte1.classList.add('Sur_Cote');
                    break;
            }  
        }
    }
}
function pour_texte_2_add() {
    container_1.classList.add("ArrierPlan")
    texte1.classList.add('dispa_texte')
    texte3.classList.add('dispa_texte')
    if (texte2.classList.contains("texte2") === true) {
        for (let i = 0; i < sur_cote.length; i++) {
            switch (sur_cote[i].id) {
                case 'texte2':
                    sur_cote_texte2.classList.add('Sur_Cote');
                    break;
                
            }  
        }
    }
}
function pour_texte_3_add() {
    container_1.classList.add("ArrierPlan")
    texte2.classList.add('dispa_texte')
    texte1.classList.add('dispa_texte')
    if (texte3.classList.contains("texte3") === true) {
        for (let i = 0; i < sur_cote.length; i++) {
            switch (sur_cote[i].id) {
                case 'texte3':
                    sur_cote_texte3.classList.add('Sur_Cote');
                    break;
            }  
        }
    }
}
function pour_texte_1_remove() {
    container_1.classList.remove("ArrierPlan")
    texte2.classList.remove('dispa_texte')
    texte3.classList.remove('dispa_texte')
    if (texte1.classList.contains("texte1") === true) {
        for (let i = 0; i < sur_cote.length; i++) {
            switch (sur_cote[i].id) {
                case 'texte1':
                    sur_cote_texte1.classList.remove('Sur_Cote');
                    break;
            }  
        }
    }
}
function pour_texte_2_remove() {
    container_1.classList.remove("ArrierPlan")
    texte1.classList.remove('dispa_texte')
    texte3.classList.remove('dispa_texte')
    if (texte2.classList.contains("texte2") === true) {
        for (let i = 0; i < sur_cote.length; i++) {
            switch (sur_cote[i].id) {
                case 'texte2':
                    sur_cote_texte2.classList.remove('Sur_Cote');
                    break;
            }  
        }
    }
}
function pour_texte_3_remove() {
    container_1.classList.remove("ArrierPlan")
    texte2.classList.remove('dispa_texte')
    texte1.classList.remove('dispa_texte')
    if (texte3.classList.contains("texte3") === true) {
        for (let i = 0; i < sur_cote.length; i++) {
            switch (sur_cote[i].id) {
                case 'texte3':
                    sur_cote_texte3.classList.remove('Sur_Cote');
                    break;
            }  
        }
    }
}

texte1.addEventListener("mouseenter",pour_texte_1_add)
texte1.addEventListener("mouseleave",pour_texte_1_remove)
texte2.addEventListener("mouseenter",pour_texte_2_add)
texte2.addEventListener("mouseleave",pour_texte_2_remove)
texte3.addEventListener("mouseenter",pour_texte_3_add)
texte3.addEventListener("mouseleave",pour_texte_3_remove)


function clic_test_1() {
    config_QUEUE.classList.add('visible')
    close_img.classList.add('visible_close')
}
function clic_test_2() {
   config_BV.classList.add('visible')
   close_img.classList.add('visible_close')
}
function clic_test_3() {
    test_SOLU.classList.add('visible')
   close_img.classList.add('visible_close')
}
function clic_remove_1() {
    config_BV.classList.remove('visible')
    config_QUEUE.classList.remove('visible')
    test_SOLU.classList.remove('visible')
    close_img.classList.remove('visible_close')
}

texte1.addEventListener('click',clic_test_1)
texte2.addEventListener('click',clic_test_2)
texte3.addEventListener('click',clic_test_3)
close_img.addEventListener('click',clic_remove_1)