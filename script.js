const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);

const botoes_respostas = document.querySelectorAll("#btn");

var acertos = 0;
var erros = 0;

let pergunta_atual = 0;

const respostas = {
    "1": "true",
    "2": "false",
    "3": "true",
    "4": "true",
    "5": "false"
};

function resposta(pergunta_nome, valor) {
    if(!["true", "false"].includes(valor)){
        next_question();
        return;
    }
    if (respostas[pergunta_nome] == valor) {
        acertos += 1;
    } else {
        erros += 1;
    }
    next_question();
}

function next_question() {
    pergunta_atual += 1;

    for (const pergunta of document.querySelector("#perguntas").children) {
        if (pergunta.id == pergunta_atual) {
            pergunta.classList.replace("invisivel", "visivel");
        } else {
            pergunta.classList.replace("visivel", "invisivel");
        }
    }

    if (pergunta_atual > 5) {
        mostrar_resposta();
    }
}

function mostrar_resposta() {
    $("div#resultado").classList.replace("invisivel", "visivel");

    $("#respostas_corretas").innerHTML += acertos;
    $("#respostas_incorretas").innerHTML += erros;
}

$$("label#btn").forEach(e=>{
    e.onclick = button => {
        let btn_id = e.parentNode.parentNode.id;
        let btn_value = button.target.control.value;
        resposta(btn_id, btn_value);
    }
})