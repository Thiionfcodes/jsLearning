let animes = [];
let indiceEdit = null;

function addAnimes() {
    const nomeAnime = document.getElementById("nomeAnime").value.trim();
    const generoAnime = document.getElementById("generoAnime").value.trim();
    const numeroEpisodios = parseInt(document.getElementById("numeroEpisodios").value);
    const descricaoAnime = document.getElementById("descricaoAnime").value.trim();

    if (nomeAnime && generoAnime && !isNaN(numeroEpisodios) && descricaoAnime) {
        const anime = {
            nome: nomeAnime,
            genero: generoAnime,
            numeroEp: numeroEpisodios,
            descricao: descricaoAnime
        };

        if (indiceEdit !== null) {
            animes[indiceEdit] = anime;
            indiceEdit = null;
        } else {
            animes.push(anime);
        }

        mostrarAnimes();
        limparCampos();

    } else {
        alert("Preencha os dados corretamente");
    }
}

function mostrarAnimes() {
    const listaAnimes = animes.map((anime, index) => `
        <div class="card-anime">
            <h2>${anime.nome}</h2>
            <p><strong>Gênero:</strong> ${anime.genero}</p>
            <p><strong>Episódios:</strong> ${anime.numeroEp}</p>
            <p><strong>Descrição:</strong> ${anime.descricao}</p>
            <div class="acoes-anime">
                <button onclick="editarAnimes(${index})">Editar</button>
                <button onclick="deletarAnimes(${index})">Deletar</button>
            </div>
        </div>`
    );
    document.getElementById("animes").innerHTML = listaAnimes.join("");
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

    indiceEdit = index;
}

function deletarAnimes(index) {
    animes.splice(index, 1);

    if (indiceEdit === index) {
        indiceEdit = null;
        limparCampos();
    } else if (indiceEdit !== null && index < indiceEdit) {
        indiceEdit--;
    }

    mostrarAnimes();
}