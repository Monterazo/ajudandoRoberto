//Usa o DOM para "selecionar" o elemento "character" e o container dele, para depois poder manipular com o código abaixo
const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];

//Define a velocidade como 10px
const VELOCITY = 10;

//Pega a altura e largura da tela do usuário por meio do DOM e utiliza como dados para o jogo
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = window.innerHeight; //Aqui troquei pra window.innerHeight porque o screen.height era maior que o viewport :)

//Informa as posições vertical e horizontal iniciais do personagem "Roberto", já definidas no CSS
let xPosition = 500;
let yPosition = 300;

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

//Se uma tecla for apertada, o eventlistener é acionado e, caso a tecla pressionada tenha sido uma das setas, será selecionada embaixo
window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })


    if(key === "ArrowUp" && yPosition> 0){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown" && yPosition<(SCREEN_HEIGHT -100)){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft" && xPosition>0){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    //Quando a tecla direita é pressionada, o personagem é movido para a direita e, se ultrapassar a tela do usuário, a função é parada, a margem de 100px (o tamanho de Roberto) é adicionada para evitar que saia do mapa
    if(key === "ArrowRight" && xPosition< (SCREEN_WIDTH - 90)){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }


    //Após a alteração de velocidade, essas funções mudam visualmente o boneco Roberto
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`

});
