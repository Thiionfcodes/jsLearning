const funcionarios = [
    {id: 1, nome: "Pedro", area: "Análise de dados", idade: 31, salario: 5000},
    {id: 2, nome: "Thiago", area: "Eng de Software", idade: 30, salario: 12000},
    {id: 3, nome: "Carol", area: "Frontend", idade: 20, salario: 4500}
];

function exibirFuncionarios () {
    const listaFuncionarios = funcionarios.map(funcionario => `<p>ID: ${funcionario.id} - Nome: ${funcionario.nome} - Área: ${funcionario.area} - Idade: ${funcionario.idade} - Salário: ${funcionario.salario}.</p>`).join("");
    document.getElementById("detalhesFuncionarios").innerHTML = listaFuncionarios;
}

function calcularSalariosTotais () {
    const totalSalario = funcionarios.reduce((total, funcionario) => total + funcionario.salario, 0);
    document.getElementById("detalhesFuncionarios").innerHTML = `<p>O salário total dos funcionários é de R$${totalSalario}.</p>`;
}

function exibirFuncionariosEng() {
    const funcionarioEng = funcionarios.filter(funcionario => funcionario.area === "Eng de Software");
    const exibirFuncionarioEng = funcionarioEng.map(funcionario => `<p>${funcionario.id}: ${funcionario.nome} - ${funcionario.idade} - ${funcionario.area} - ${funcionario.salario}</p>`).join("");
    document.getElementById("detalhesFuncionarios").innerHTML = exibirFuncionarioEng;
}

function encontrarFuncionarioPorId(funcionarioID) {
    const acharFuncionario = funcionarios.find(funcionario => funcionario.id === funcionarioID);
    if (acharFuncionario) {
        document.getElementById("detalhesFuncionarios").innerHTML = `<p>${acharFuncionario.id}: ${acharFuncionario.nome} - ${acharFuncionario.idade} - ${acharFuncionario.area} - ${acharFuncionario.salario}</p>`;
    } else {
            document.getElementById("detalhesFuncionarios").innerText = "Não foi possível encontrar um funcionário com esse id."
        }
    }