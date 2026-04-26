var xhr = new XMLHttpRequest();
var url = './artigo_musculacao.json'
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
var artigosDiv = document.getElementById('artigos');
var artigos = xhr.response.artigos;

artigos.forEach(function (artigo) {
var artigoDiv = document.createElement('div');
artigoDiv.classList.add('artigo');

var titulo = document.createElement('h2');
titulo.textContent = artigo.titulo;

var descricao = document.createElement('p');
descricao.textContent = artigo.descricao;

var exercicios = document.createElement('h3');
exercicios.textContent = 'Separação de Exercícios de Musculação para o objetivo:';

var listaExe = document.createElement('ul');
artigo.listaExe.forEach(function (exe) {
    var itemLista = document.createElement('li');
    itemLista.textContent = exe;
    listaExe.appendChild(itemLista);
});

var alimentacao = document.createElement('h3')
alimentacao.textContent = 'Separação de macro-nutrientes para o objetivo:';

var listaAlime = document.createElement('ul');
artigo.listaAlime.forEach(function (alime) {
    var itemLista = document.createElement('li');
    itemLista.textContent = alime;
    listaAlime.appendChild(itemLista);
});

artigoDiv.appendChild(titulo);
artigoDiv.appendChild(descricao);
artigoDiv.appendChild(exercicios);
artigoDiv.appendChild(listaExe);
artigoDiv.appendChild(alimentacao);
artigoDiv.appendChild(listaAlime);
artigosDiv.appendChild(artigoDiv);
});
};

xhr.onerror = function() {
    var artigosDiv = document.getElementById('artigos');
    artigosDiv.textContent = 'Erro ao carregar o JSON. Abra com um servidor local.';
};

xhr.send();