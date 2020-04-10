let button = document.querySelector('button'),
    header = document.querySelector('h1'),
    body = document.querySelector('body');

function changeColor() {
    const randomColor= "#"+((1<<24)*Math.random()|0).toString(16);
    header.textContent = randomColor;
    body.style.cssText = `background-color: ${randomColor}`;
    button.style.color = randomColor;
}

button.addEventListener('click', changeColor);
