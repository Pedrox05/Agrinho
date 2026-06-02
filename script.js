const btn = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

const frases = [
    "🌱 Cuidar da natureza é garantir o futuro.",
    "🚜 O campo e a cidade caminham juntos.",
    "🌾 A agricultura sustentável alimenta o mundo.",
    "💚 Pequenas atitudes geram grandes transformações.",
    "🌳 Preservar hoje é viver melhor amanhã."
];

btn.addEventListener("click", () => {
    const sorteio = Math.floor(Math.random() * frases.length);
    mensagem.textContent = frases[sorteio];
});