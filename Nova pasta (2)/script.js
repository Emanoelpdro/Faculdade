// Cadastro de Reserva
function submitForm() {
    const placa = document.getElementById('placa').value;
    const nome = document.getElementById('nome').value;
    const apartamento = document.getElementById('apartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const vaga = document.getElementById('vaga').value;

    console.log("Cadastro realizado com sucesso:");
    console.log("Placa: " + placa);
    console.log("Nome do Proprietário: " + nome);
    console.log("Número do Apartamento: " + apartamento);
    console.log("Bloco do Apartamento: " + bloco);
    console.log("Modelo do Veículo: " + modelo);
    console.log("Cor do Veículo: " + cor);
    console.log("Número da Vaga de Estacionamento: " + vaga);

    alert("Cadastro realizado com sucesso!");
}
