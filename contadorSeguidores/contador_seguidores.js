let contador = 0;

function somaSeguidor() {
    contador++;
    contagem();

    switch(contador) {
    case 10:
        alert(`Parabéns pelo seu ${contador}° seguidor!`);
        break

    case 20:
        alert(`Parabéns pelo seu ${contador}° seguidor!`);
        break

    case 30:
        alert(`Parabéns pelo seu ${contador}° seguidor!`);
        break

    case 40:
        alert(`Parabéns pelo seu ${contador}° seguidor!`);
        break

    case 50:
        alert(`Parabéns pelo seu ${contador}° seguidor!`);
        break 
}
}

function contagem() {
    document.getElementById("contagem").innerText = contador;
}

function removerSeguidor() {
    if (contador > 0) {
        contador--;
        contagem();
    }
}

function redefinirSeguidores() {
    if (confirm("Deseja redefinir os seguidores para zero?")) {
    contador = 0;
    contagem();
    alert("Os seguidores foram redefinidos.");
    }
}

contagem();


function hoverOver() {
    document.getElementById("hover").innerText = "Mouse sobre a div.";
}

function hoverOut() {
    document.getElementById("hover").innerHTML = "";
}