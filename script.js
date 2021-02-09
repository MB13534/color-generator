const currentColor = document.getElementById("current-color");
const leftColor = document.getElementById("left-color");
const rightColor = document.getElementById("right-color");
const body = document.querySelector("body");
const random = document.querySelector('.random');

random.addEventListener('click', randomGenerate);

function randomGenerate() {
    leftColor.value = randomColor();
    rightColor.value = randomColor();
    handleChange();
}

function randomColor() {
    return '#'+Math.random().toString(16).substr(2,6)
}



body.style.backgroundImage = `linear-gradient(to right, ${leftColor.value}, ${rightColor.value})`;
currentColor.innerText = body.style.backgroundImage;

leftColor.addEventListener('input', () => handleChange());
rightColor.addEventListener('input', () => handleChange());

function handleChange() {
    body.style.backgroundImage = `linear-gradient(to right, ${leftColor.value}, ${rightColor.value})`;
    currentColor.innerText = body.style.backgroundImage;
}

