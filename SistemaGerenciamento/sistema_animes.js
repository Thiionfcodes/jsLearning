let animes = [];

function addAnimes() {
    const nomeAnime = document.getElementById("nomeAnime").value;
    const generoAnime = document.getElementById("generoAnime").value;
    const numeroEpisodios = parseInt(document.getElementById("numeroEpisodios").value);
    const descricaoAnime = document.getElementById("descricaoAnime").value;

    if (nomeAnime && generoAnime && !isNaN(numeroEpisodios) && descricaoAnime) {
    const anime = {
    nome: nomeAnime,
    genero: generoAnime,
    numeroEp: numeroEpisodios,
    descricao: descricaoAnime
    }

    animes.push(anime);
    mostrarAnimes();
    limparCampos();

    } else {
        alert("Preencha os dados corretamente");
    }
}

function mostrarAnimes() {
    const mostrarAnimes = animes.map((anime, index) => `<h1>${anime.nome}</h1>
    <p><strong>Gênero:</strong> ${anime.genero}</p>
    <p><strong>Episódios:</strong> ${anime.numeroEp}</p>
    <p><strong>Descrição:</strong> ${anime.descricao}</p>
    <button onclick="editarAnimes(${index})">Editar</button>
    <button onclick="deletarAnimes(${index})">Deletar</button>`
    );
    document.getElementById("animes").innerHTML = mostrarAnimes.join("");
}

function limparCampos() {
    document.getElementById("nomeAnime").value = "";
    document.getElementById("generoAnime").value = "";
    document.getElementById("numeroEpisodios").value = "";
    document.getElementById("descricaoAnime").value = "";
}

function editarAnimes(index) {
    const anime = animes[index];
    document.getElementById("nomeAnime").value = anime.nome;
    document.getElementById("generoAnime").value = anime.genero;
    document.getElementById("numeroEpisodios").value = anime.numeroEp;
    document.getElementById("descricaoAnime").value = anime.descricao;
    animes.splice(index, 1);
    mostrarAnimes();
}

function deletarAnimes(index) {
    animes.splice(index, 1);
    mostrarAnimes();
}