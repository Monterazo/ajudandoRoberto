//Usa o DOM para "selecionar" o elemento "character" e o container dele, para depois poder manipular com o código abaixo
const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];

//Define a velocidade (quantidade de pixeis que vão ser movidos por iteração) como 10px
const VELOCITY = 10;

//Pega a altura e largura da tela do usuário por meio do DOM e utiliza como dados para o jogo
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = window.innerHeight; //Aqui troquei pra window.innerHeight porque o screen.height era maior que o viewport :)

//Informa as posições horizontal e vertical iniciais do personagem "Pedro", já definidas no CSS
let xPosition = 500;
let yPosition = 300;

//Cria array com as teclas disponíveis e as direções, para deixar o código mais limpo
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

//Se uma tecla for apertada, o eventlistener é acionado e, caso a tecla pressionada tenha sido uma das setas, será selecionada embaixo
window.addEventListener("keydown", (event) => {
    //Guarda a informação da tecla que foi apertada
    const key  = event.key;

    //A função ".some" confere se uma das teclas disponíveis é igual a tecla pressionada, se for, ele vai retornar true
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    //Caso a tecla pressionada não seja uma das teclas definidas no array keysAvaiable, a função é encerrada
    if(!keyPressedAvaiable) return;

    //Remove a direção (visual) do avatar de Pedro
    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    //Se a tecla de cima for pressionada e não estiver no limite, ele anda para cima
    if(key === "ArrowUp" && yPosition> 0){
        //Muda a direção visual do avatar
        character.classList.add("turnUp");
        //Muda a posição do avatar
        yPosition -= VELOCITY;
    }

    //Se a tecla de baixo for pressionada e não estiver no limite, ele anda para baixo (os 100px subtraídos são o tamanho da imagem e SCREEN_HEIGHT é o limite da tela)
    if(key === "ArrowDown" && yPosition<(SCREEN_HEIGHT -100)){
        //Muda a direção visual do avatar
        character.classList.add("turnDown");
        //Muda a posição do avatar
        yPosition += VELOCITY;
    }

    //Se a tecla da esquerda for pressionada e não estiver no limite, ele anda para a esquerda
    if(key === "ArrowLeft" && xPosition>0){
        //Muda a direção visual do avatar
        character.classList.add("turnLeft");
        //Muda a posição do avatar
        xPosition -= VELOCITY;
    }

    //Quando a tecla direita é pressionada, o personagem é movido para a direita e, se ultrapassar a tela do usuário, a função é parada, a margem de 100px (o tamanho de Pedro) é adicionada para evitar que saia do mapa
    if(key === "ArrowRight" && xPosition< (SCREEN_WIDTH - 90)){
        //Muda a direção visual do avatar
        character.classList.add("turnRight");
        //Muda a posição do avatar
        xPosition += VELOCITY;
    }


    //Após pressionar as teclas, essas funções atualizam no navegador (visualmente) a posição de Pedro, respectivamente, vertical e horizontal
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`

});
