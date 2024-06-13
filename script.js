const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Selecione as montadoras que estão trabalhando no desenvolvimento de sistemas para carros autônomos",
        alternativas: [
            {
                texto: "Tesla",
                afirmacao: "afirmação"
            },
            {
                texto: "Google e Tesla",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "A inteligência artificial é desenvolvida a partir",
        alternativas: [
            {
                texto: "Algoritmos",
                afirmacao: "afirmação"
            },
            {
                texto: "Smartphone",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "É um tipo de Inteligência Artificial",
        alternativas: [
            {
                texto: "Sistemas que registram dados",
                afirmacao: "afirmação"
            },
            {
                texto: "Sistemas que agem como humanos",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é considerado um exemplo de IA?",
        alternativas: [
            {
                texto: "Alexa",
                afirmacao: "afirmação"
            },
            {
                texto: "Torradeira",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o propósito da IA?",
        alternativas: [
            {
                texto: "Tornar nossas vidas mais fáceis",
                afirmacao: "afirmação"
            },
            {
                texto: "Dominar o mundo",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();