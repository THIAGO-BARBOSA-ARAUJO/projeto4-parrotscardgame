const area_cartas = document.querySelector(".area-cartas");

numero_cartas = Number(
  prompt(
    "Digite com quantas cartas quer jogar \nDigite um número par entre 4 e 14"
  )
);

let img = [
  "bobrossparrot.gif",
  "bobrossparrot.gif",
  "explodyparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "fiestaparrot.gif",
  "metalparrot.gif",
  "metalparrot.gif",
  "tripletsparrot.gif",
  "tripletsparrot.gif",
  "revertitparrot.gif",
  "revertitparrot.gif",
  "unicornparrot.gif",
  "unicornparrot.gif",
];

while (numero_cartas < 4 || numero_cartas > 14 || numero_cartas % 2 != 0) {
  numero_cartas = Number(
    prompt(
      "Digite com quantas cartas quer jogar \nDigite um número par entre 4 e 14"
    )
  );
}

let img_escolhida = [];

function cards_aleatorios() {
  for (let i = 0; i < numero_cartas; i++) {
    img_escolhida.push(img[i]);
  }

  for (let i = 0; i < numero_cartas; i++) {
    let index = [Math.floor(Math.random() * img_escolhida.length)];
    let s1random = img_escolhida[index];

    area_cartas.innerHTML += `
    <div data-identifier="card" class="carta flip" onclick="flip(this)">
                        
        <div data-identifier="back-face" class="frente face">
            <img src="img/front.png">
        </div><!--frente-->

        <div data-identifier="front-face" class="atras face">
            <img class="front-image" src="img/${s1random}">
        </div><!--atras-->
        
    </div><!--carta-->`;

    img_escolhida.splice(index, 1);
  }
}

let cards_clicados = [];
let jogadas = 0;
let catas_corretas = [];

const carta = document.querySelector(".carta");

let meu_id;

function flip(elemento) {
  const img_src = elemento.querySelector(".front-image").getAttribute("src");
  if (cards_clicados.length === 2) {
    return;
  }
  for (const src of catas_corretas) {
    if (src === img_src) {
      return;
    }
  }

  jogadas++;
  elemento.classList.toggle("flip");
  cards_clicados.push(elemento);

  if (cards_clicados.length === 2) {
    let src_imgs = [];
    cards_clicados.forEach((element) => {
      const image = element.querySelector(".front-image").getAttribute("src");
      src_imgs.push(image);
    });
    if (src_imgs[0] !== src_imgs[1]) {
      for (const e of cards_clicados) {
        setTimeout(() => {
          e.classList.toggle("flip");
          cards_clicados = [];
        }, 1000);
      }
    } else {
      // quando o cara acerta as cartas

      cards_clicados.forEach((card) => {
        catas_corretas.push(
          card.querySelector(".front-image").getAttribute("src")
        );
      });

      if (numero_cartas === catas_corretas.length) {
        setTimeout(() => {
          alert(
            `Você ganhou em ${jogadas} jogadas em ${segundos - 1} segundos!`
          );
          let jogar_denovo = prompt("Você gostaria de jogar novamente ?");
          while (jogar_denovo !== "sim" && jogar_denovo !== "não") {
            jogar_denovo = prompt("Você gostaria de jogar novamente ?");
          }
          if (jogar_denovo === "sim") {
            location.reload();
          }else{
            console.log(meu_id)
            clearInterval(meu_id)
          }
        }, 1000);
      }
      cards_clicados = [];
    }
  }
}

let segundos = 0;

function relogio() {
  meu_id = setInterval(() => {
    document.querySelector(".segundos").innerHTML = segundos;
    segundos++;
  }, 1000);
  console.log(meu_id);
}

relogio();

cards_aleatorios();
