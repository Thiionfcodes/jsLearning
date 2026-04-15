function somaProdutos() {
    let produto1 = Number(document.getElementById("produto1").value);
    let produto2 = Number(document.getElementById("produto2").value);
    let produto3 = Number(document.getElementById("produto3").value);

    let total = produto1 + produto2 + produto3;

    if (total === 0) {
        document.getElementById("total").innerText = `Digite os valores dos produtos comprados.`
    } else {
        document.getElementById("total").innerText = `O total da soma dos produtos foi R$${total.toFixed(2)}.`;
    }
}