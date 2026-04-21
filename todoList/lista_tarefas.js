const campoTarefa = document.getElementById('campoTarefa');
const botaoAdd = document.getElementById('botaoAdd');
const botaoLimpar = document.getElementById('botaoLimpar');
const listaTarefas = document.getElementById('listaTarefas');

let tarefas = [];

function addTarefa () {
    const tarefaTexto = campoTarefa.value.trim('');
    if (tarefaTexto !== "") {
        tarefas.push({ text: tarefaTexto, completed: false });
        campoTarefa.value = "";
        mostrarTarefas()
    }
}

function mostrarTarefas() {
    listaTarefas.innerHTML = "";
    tarefas.map((tarefa, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="tarefa-${index}" ${tarefa.completed ? "checked" : ""}>
            <label id="tarefa-${index}">${tarefa.text}</label>`;
        li.querySelector('input').addEventListener("change", () => alternarModo(index));
        listaTarefas.appendChild(li);
    });
}

function alternarModo(index) {
    tarefas[index].completed = !tarefas[index].completed;
    mostrarTarefas();
}

function limparTarefas() {
    tarefas = tarefas.filter(tarefa => !tarefa.completed);
    mostrarTarefas();
}

botaoAdd.addEventListener('click', addTarefa);
botaoLimpar.addEventListener('click', limparTarefas);