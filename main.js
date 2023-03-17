const form = document.querySelector('#form-contato');
const nomes = [];
const telefones = [];

let lista = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})


function adicionaLinha() {

    const inputNome = document.querySelector('#nome-contato');
    const inputTel = document.querySelector('#numero-contato');

    if (nomes.includes(inputNome.value)) {
        alert(`Erro: ${inputNome.value} já está na sua agenda de contatos.`);
    } else if (telefones.includes(parseInt(inputTel.value))){
        alert(`Erro: O número ${inputTel.value} já está na sua agenda de contatos.`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(parseInt(inputTel.value));

        let linha = '<tr>';
        linha += `<td><img src="imagens/person.png" alt="icone person">${inputNome.value}</td>`;
        linha += `<td><img src="imagens/call.png" alt="icone telefone">${inputTel.value}</td>`;
        linha += '</tr>';

        lista += linha;
    }

    inputNome.value = '';
    inputTel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = lista;
}


