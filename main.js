const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];

const VELOCITY = 10;

const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

let xPosition = 500;
let yPosition = 300;

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

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

    if(key === "ArrowDown" && yPosition<(SCREEN_HEIGHT-200)){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft" && xPosition>0){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    //Quando a tecla direita é pressionada, o personagem é movido para a direita e, se ultrapassar a tela do usuário, a função é parada, a margem de 90px é adicionada para evitar que saia do mapa
    if(key === "ArrowRight" && xPosition< (SCREEN_WIDTH - 90)){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    console.log(yPosition);
    console.log(SCREEN_HEIGHT);

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
