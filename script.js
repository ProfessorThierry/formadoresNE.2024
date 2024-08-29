const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você acredita que podemos combater o racismo na sociedade?",
        alternativas: [           
            {
                texto: "Participando de campanhas de conscientização e educação sobre igualdade racial.",
                afirmacao: "Você acredita que a conscientização e a educação são ferramentas essenciais para promover a igualdade racial e combater o racismo."
            },
            {
                texto:  "Denunciando atos de discriminação e apoiando políticas públicas inclusivas.",
                afirmacao: "Você considera a denúncia de discriminação e o suporte a políticas públicas inclusivas como métodos importantes para enfrentar o racismo."
            }
        ]
    },
    {
        enunciado: "Como você pode ajudar a combater a disseminação de fake news, especialmente as que perpetuam o racismo?",
        alternativas: [ 
            {
                texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.",
                afirmacao: "Você valoriza a verificação de informações como um meio fundamental para combater a disseminação de fake news e evitar a propagação de conteúdos prejudiciais."
            },
            {
                texto: "Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.",
                afirmacao: "Você acredita na importância de educar os outros sobre os riscos das fake news e incentivar a responsabilidade ao compartilhar informações, especialmente sobre temas raciais."
            }
        ]
    },
    {
        enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
        alternativas: [           
            {
                texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
                afirmacao: "Você acredita que a instalação de painéis solares em locais estratégicos como escolas e centros comunitários pode ser uma forma eficaz de promover o uso de energia limpa e beneficiar comunidades carentes."
            },
            {
                texto: "Defendendo políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
                afirmacao: "Você considera essencial a defesa de políticas públicas que ofereçam subsídios para energia solar, facilitando o acesso a essa tecnologia para famílias de baixa renda."
            }
        ]
    } 
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
}

mostraPergunta(); 