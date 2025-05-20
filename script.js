const jogos = [
  {
    nome: "Forza Horizon 5",
    img: "/img/forza5.jpg",
    desc: "Um dos melhores jogos de corrida já feitos!",
  },
  {
    nome: "Far Cry 3",
    img: "/img/far cry 3.jpeg",
    desc: "Com certeza o melhor da franquia e o melhor vilão!",
  },
  {
    nome: "Assassin's Creed Unity",
    img: "/img/ac unity.avif",
    desc: "Apesar de todos os bugs, é muito divertido!",
  },
  {
    nome: "Devil May Cry 5",
    img: "/img/devil may cry 5.jpeg",
    desc: "Meu segundo favorito Hack and Slash, buildando estilo como nunca!",
  },
  {
    nome: "Tom Clancy's Rainbow Six Siege",
    img: "/img/r6.avif",
    desc: "Relação de amor e ódio desde 2017!",
  },
  {
    nome: "God Of War III",
    img: "/img/God-of-War-3.jpg",
    desc: "Um dos melhores jogos ja feitos na história, porradaria insana e cabeças voando pra todo lado!",
  },
  {
    nome: "Marvel's Spiderman",
    img: "/img/spiderman.avif",
    desc: "Definição perfeita de diverção num jogo, é o miranha vei!",
  },
  {
    nome: "Ark Survival Ascended",
    img: "/img/ark ascended.jpeg",
    desc: "Sobreviver num mundo pós apocaliptico recheado de dinossauros é tenso, mas muito divertido!",
  },
  {
    nome: "Black Myth Wukong",
    img: "/img/black myth wukong.avif",
    desc: "Primeiro jogo que platinei na vida, nunca vou me esquecer das emoções que me trouxe!",
  },
  {
    nome: "The Witcher 3: Wild Hunt",
    img: "/img/the witcher 3.jpeg",
    desc: "Melhor jogo de todos os tempos, densidade e qualidade realmente fora da curva!",
  },
];

const carrossel = document.getElementById("carrossel");

function criaCartas(jogo, index) {
  const container = document.createElement("div");
  container.className = "container-da-carta";

  const quantidadeElementos = document.createElement("div");
  quantidadeElementos.className = "numero-carta";
  quantidadeElementos.textContent = 10 - index;

  const carta = document.createElement("div");
  carta.className = "carta";

  const cartaDentro = document.createElement("div");
  cartaDentro.className = "carta-dentro";

  const cartaFrente = document.createElement("div");
  cartaFrente.className = "carta-frente";

  const img = document.createElement("img");
  img.src = jogo.img;
  img.alt = jogo.nome;

  const titulo = document.createElement("h3");
  titulo.textContent = jogo.nome;

  const descricao = document.createElement("p");
  descricao.textContent = jogo.desc;

  cartaFrente.appendChild(img);
  cartaFrente.appendChild(titulo);
  cartaFrente.appendChild(descricao);

  const cartaFundo = document.createElement("div");
  cartaFundo.className = "carta-fundo";
  cartaFundo.textContent = "?";

  cartaDentro.appendChild(cartaFrente);
  cartaDentro.appendChild(cartaFundo);
  carta.appendChild(cartaDentro);

  container.appendChild(quantidadeElementos);
  container.appendChild(carta);

  container.addEventListener("click", () => {
    container.classList.toggle("flipped");
  });

  return container;
}

jogos.forEach((jogo, idx) => {
  const cartaContainer = criaCartas(jogo, idx);
  carrossel.appendChild(cartaContainer);
});
