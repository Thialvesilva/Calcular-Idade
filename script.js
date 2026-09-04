const calcular = document.getElementById('calcular')
const data = new Date();
const resultado = document.getElementById('resultado');


calcular.addEventListener('click', function () {
    const dataNascimento = document.getElementById('dataNascimento').value
    const dataObjeto = new Date(dataNascimento);
    let idade = data.getFullYear() - dataObjeto.getFullYear()
    if (!dataNascimento) {
        resultado.textContent = "Por favor, insira uma data.";
        return;
    }
    let mesAtual = data.getMonth() + 1; // data atual
    let mesNascimento = dataObjeto.getMonth() + 1; //Nascimento da pessoa
    if (mesAtual < mesNascimento) {
        idade = idade - 1
    }

    let diaAtual = data.getDate(); // dia atual
    let diaNascimento = dataObjeto.getDate(); // dia nascimento
    if (mesAtual < mesNascimento) {
        idade = idade - 1

    } else if (mesAtual === mesNascimento) {
        if(diaAtual < diaNascimento){
            idade--
        }
    }

    resultado.textContent = idade + " anos"
})