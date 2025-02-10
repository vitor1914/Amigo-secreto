let nomes = [];

function adicionarNome() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();

    if (nome && !nomes.includes(nome)) {
        nomes.push(nome);
        atualizarLista();
        nomeInput.value = "";
    } else {
        alert("Nome inválido ou já adicionado.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaNomes");
    lista.innerHTML = "";
    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortear() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 nomes para sortear.");
        return;
    }

    let sorteados = [...nomes];
    let resultado = [];

    for (let i = 0; i < nomes.length; i++) {
        let sorteado;
        do {
            sorteado = sorteados[Math.floor(Math.random() * sorteados.length)];
        } while (sorteado === nomes[i]);

        resultado.push(`${nomes[i]} → ${sorteado}`);
        sorteados = sorteados.filter(n => n !== sorteado);
    }

    exibirResultado(resultado);
}

function exibirResultado(lista) {
    let ul = document.getElementById("resultado");
    ul.innerHTML = "";
    lista.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}
