let contador = 0;
contagem();


function contagem() {
    document.getElementById("contador").innerText = contador;
}



function soma() {
    contador++;
    contagem();

    switch (contador) {
    case 10:
        alert(`Parabéns pelo seu ${contador}° seguidor!`);
        break;

    case 20:
        alert(`Parabéns pelo seu ${contador}° seguidor!`);
        break;

    case 30:
        alert(`Parabéns pelo seu ${contador}° seguidor!`);
        break;

    case 40:
        alert(`Parabéns pelo seu ${contador}° seguidor!`);
        break;
        
    case 50:
        alert(`Parabéns pelo seu ${contador}° seguidor!`);
        break;    

    default:
        break;
    }
}




function diminui() {
    if (contador > 0) {
        contador--;
        contagem();
    }
}




function reset() {
    if (confirm("Você deseja resetar os seguidores?")) {
        alert(`Os seguidores foram resetados.`);
        contador = 0;
        contagem();
    }
}



const button = document.getElementById("eventList");

button.addEventListener('click', alertList)

function alertList() {
    alert("Você clicou no botão!");
}



const divChange = document.getElementById("hover");

divChange.addEventListener('mouseover', function onOver() {
    document.getElementById("fantasma").innerText = "Você desbloqueou o parágrafo fantasma."
});

divChange.addEventListener('mouseout', function onOut() {
    document.getElementById("fantasma").innerText = ""
});

divChange.addEventListener('click', function onClick() {
    document.getElementById("fantasma2").innerText = "Você desbloqueou o parágrafo EXTRA!"
});



document.getElementById("myForm").addEventListener('submit', function(event) {
    let palavra = document.getElementById("textInput").value;
    event.preventDefault();
    alert(palavra);
});


