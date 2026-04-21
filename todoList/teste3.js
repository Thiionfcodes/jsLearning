const campoTarefa = document.getElementById("campoTarefa");
const lista = document.getElementById("lista");
const botaoAdd = document.getElementById("botaoAdd");
const botaoLimpar = document.getElementById("botaoLimpar");

let tarefas = [];

function addTarefa() {
    const textoTarefa = campoTarefa.value.trim();
    if (textoTarefa !== "") {
        tarefas.push({ text: textoTarefa, completed: false });
        campoTarefa.value = "";
        mostrarTarefas();
    }
}

function mostrarTarefas() {
    lista.innerHTML = "";
    tarefas.map((tarefa, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type='checkbox' id='tarefa-${index}' ${tarefa.completed ? "checked" : ""}
        <label id='tarefa-${index}'>${tarefa.text}</label>`;
        li.querySelector('input').addEventListener("change", () => mudarCaixa(index));
        lista.appendChild(li);
    });
}

function mudarCaixa(index) {
    tarefas[index].completed = !tarefas[index].completed;
    mostrarTarefas();
}

function limparTarefas() {
    tarefas = tarefas.filter(tarefa => !tarefa.completed);
    mostrarTarefas();
}

botaoAdd.addEventListener('click', addTarefa);
botaoLimpar.addEventListener('click', limparTarefas);
