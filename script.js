const precoIngresso = 100;
const form = document.getElementById("form-inscricao");

function processarInscricao(nome, idade, possuiCupom) {
    let precoFinal = precoIngresso;

    if(idade < 16) {
        console.log("Inscrição bloqueada: "+nome+" não possui idade mínima.")
    }else {
        if(possuiCupom) {
            precoFinal = precoFinal - 20;
        }
        console.log("Iscrição confirmada para "+nome+".");
        console.log("Valor a pagar: R$ "+precoFinal);
    }
}

function simularVendaDeIngressos() {
    for(let i = 5; i > 0; i--) {
        console.log("Pense rápido! Faltam apenas "+i+" Vagas para o TechDay 2026.")
    }
    console.log("Vagas encerradas.")
}

form.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
    console.log("Evento interceptado com sucesso.")
    const valorNome = document.getElementById("nome").value;
    const valorEmail = document.getElementById("email").value; }
)

if(valorNome.trim() === "") {
    alert("Por favor, preencha o seu nome."); }

if(valorEmail.trim() === "") {
    alert("Por favor, preencher o E-mail."); }

localStorage.setItem(
    "nome",
    "email"
)