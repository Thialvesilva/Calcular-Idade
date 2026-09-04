const calcular = document.getElementById('calcular')
const data = new Date();
const resultado = document.getElementById('resultado');


calcular.addEventListener('click', function () {
    const dataNascimento = document.getElementById('dataNascimento').value
    const dataObjeto = new Date(dataNascimento);
    let idade = data.getFullYear() - dataObjeto.getFullYear()
    resultado.textContent = idade + " anos"
})