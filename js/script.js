
const area_cartas = document.querySelector(".area-cartas")

numero_cartas = Number(prompt("Digite com quantas cartas quer jogar \nDigite um número par entre 4 e 14"));

let img = ['bobrossparrot.gif', 'bobrossparrot.gif', 'explodyparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'metalparrot.gif', 'tripletsparrot.gif', 'tripletsparrot.gif', 'revertitparrot.gif', 'revertitparrot.gif', 'unicornparrot.gif', 'unicornparrot.gif'] ;

while(numero_cartas < 4 || numero_cartas > 14 || numero_cartas % 2 != 0){
    numero_cartas = Number(prompt("Digite com quantas cartas quer jogar \nDigite um número par entre 4 e 14"));
}

let img_escolhida = []

for(let i = 0; i < numero_cartas; i++){
    img_escolhida.push(img[i])
}

for(let i = 0; i < numero_cartas; i++){
    let index = [Math.floor(Math.random() * img_escolhida.length)] ;
    let s1random = img_escolhida[index]

    area_cartas.innerHTML += `
<div data-identifier="card" class="carta flip" onclick="flip(this)">
                    
    <div data-identifier="back-face" class="frente face">
        <img src="img/front.png">
    </div><!--frente-->

    <div data-identifier="front-face" class="atras face">
        <img src="img/${s1random}">
    </div><!--atras-->
    
</div><!--carta-->`

    img_escolhida.splice(index, 1);
    console.log(img_escolhida)

    
}



const carta = document.querySelector(".carta")

function flip(elemento) {
    elemento.classList.toggle("flip")
}