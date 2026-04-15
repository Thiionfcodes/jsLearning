function enviarFormulario() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;
    const profissao = document.getElementById("profissao").value;
    const tipoProduto = document.getElementById("tipoProduto").value;
    const feedback = document.getElementById("feedback").value;

    alert("Obrigado por seu feedback!");

    document.getElementById("respNome").innerHTML = nome;
    document.getElementById("respIdade").innerHTML = idade;
    document.getElementById("respEmail").innerHTML = email;
    document.getElementById("respProfissao").innerHTML = profissao;
    document.getElementById("respProduto").innerHTML = tipoProduto;
    document.getElementById("respFeedback").innerHTML = feedback;


   
    document.getElementById("respFormulario").style.display = 'block';
}

const button = document.getElementById("button");
button.onclick = enviarFormulario;

document.addEventListener ('keydown', function(event) {
     if (event.key === 'Enter') {
         enviarFormulario();
    }
});
