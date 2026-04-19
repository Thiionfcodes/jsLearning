let livros = [];

function addLivro() {
    let nomeLivro = document.getElementById("nomeLivro").value;
    let nomeAutor = document.getElementById("nomeAutor").value;
    let descricaoLivro = document.getElementById("descricaoLivro").value;
    let numeroPaginas = parseInt(document.getElementById("numeroPaginas").value);

    if (nomeLivro && nomeAutor && descricaoLivro && !isNaN(numeroPaginas)) {
        const livro = {
            nomeLivro: nomeLivro,
            nomeAutor: nomeAutor,
            descricaoLivro: descricaoLivro,
            numeroPaginas: numeroPaginas
        };
        livros.push(livro);
        mostrarLivros();
        limparCampos();
    } else {
            alert("Preencha os dados corretamente");
        }
    }

function mostrarLivros() {
    const livroDiv = livros.map((livro, index) => `<h2>${livro.nomeLivro}</h2>
        <p><strong>Autor:</strong> ${livro.nomeAutor}</p>
        <p><strong>Descrição:</strong> ${livro.descricaoLivro}</p>
        <p><strong>Número de Páginas:</strong> ${livro.numeroPaginas} páginas</p>
        <button onclick="editarLivro(${index})">Editar</button>
        <button onclick="deletarLivro(${index})">Deletar</button>`
    );
    document.getElementById("livros").innerHTML = livroDiv.join('');
}

function limparCampos () {
    document.getElementById("nomeLivro").value = "";
    document.getElementById("nomeAutor").value = "";
    document.getElementById("descricaoLivro").value = "";
    document.getElementById("numeroPaginas").value = "";
}

function editarLivro(index) {
    const livro = livros[index];
    document.getElementById("nomeLivro").value = livro.nomeLivro;
    document.getElementById("nomeAutor").value = livro.nomeAutor;
    document.getElementById("descricaoLivro").value = livro.descricaoLivro;
    document.getElementById("numeroPaginas").value = livro.numeroPaginas;
    livros.splice(index, 1);
    mostrarLivros();
}

function deletarLivro(index) {
    livros.splice(index, 1);
    mostrarLivros();
}