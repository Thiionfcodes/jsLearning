const cafeMenu = ["Ovos mexidos", "Panquecas", "Pão na chapa", "Café com leite"];
const almocoMenu = ["Frango a parmegiana", "Bife acebolado", "Estrogonofe", "Peixe"];
const jantarMenu = ["Hamburger", "Frutos do mar", "Macarrão com camarão", "Pizza"];

const cafeItem = cafeMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join("");
document.getElementById("cafeMenuItens").innerHTML = cafeItem;

let almocoItem = "";
    almocoMenu.forEach((item, index) => {
        almocoItem += `<p>Item ${index + 1}: ${item}</p>`;    
    });
    document.getElementById("almocoMenuItens").innerHTML = almocoItem;

let jantarItem = "";
    for (i = 0; i < jantarMenu.length; i++) {
        jantarItem += `<p>Item ${i + 1}: ${jantarMenu[i]}</p>`;
    }
    document.getElementById("jantarMenuItens").innerHTML = jantarItem;